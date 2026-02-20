import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { playerDatabase, formations } from '../data/players';
import { teamAPI } from '../services/teamAPI';
import './TeamBuilder.css';

const ItemType = 'PLAYER';

const TeamBuilder = () => {
    const [myTeam, setMyTeam] = useState(Array(11).fill(null));
    const [selectedFormation, setSelectedFormation] = useState(formations[0]);
    const [customFormation, setCustomFormation] = useState({ wk: 1, bat: 4, ar: 3, bowl: 3 });
    const [searchQuery, setSearchQuery] = useState('');
    const [filterRole, setFilterRole] = useState('All');
    const [filterCountry, setFilterCountry] = useState('All');
    const [sortBy, setSortBy] = useState('rating');
    const [savedTeams, setSavedTeams] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [teamLogo, setTeamLogo] = useState('');
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showLoadModal, setShowLoadModal] = useState(false);
    const [validationError, setValidationError] = useState('');

    const [currentUser] = useState(() => {
        let userId = localStorage.getItem('userId');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('userId', userId);
        }
        return userId;
    });

    useEffect(() => {
        loadTeamsFromBackend();
    }, []);

    const loadTeamsFromBackend = async () => {
        try {
            const response = await teamAPI.getUserTeams(currentUser);
            if (response.success) {
                setSavedTeams(response.teams);
            }
        } catch (error) {
            console.error('Error loading teams:', error);
        }
    };

    useEffect(() => {
        validateTeam();
    }, [myTeam, selectedFormation]);

    const validateTeam = () => {
        const filledPositions = myTeam.filter(p => p !== null);

        if (filledPositions.length === 0) {
            setValidationError('');
            return;
        }

        const counts = {
            'Wicket-Keeper': 0,
            'Batsman': 0,
            'All-Rounder': 0,
            'Bowler': 0
        };

        filledPositions.forEach(player => {
            counts[player.role]++;
        });

        if (filledPositions.length > 0 && counts['Wicket-Keeper'] === 0) {
            setValidationError('⚠️ At least 1 Wicket-Keeper is required!');
            return;
        }

        if (filledPositions.length === 11) {
            if (selectedFormation.id !== 10) {
                const formationMatch =
                    counts['Wicket-Keeper'] === selectedFormation.wk &&
                    counts['Batsman'] === selectedFormation.bat &&
                    counts['All-Rounder'] === selectedFormation.ar &&
                    counts['Bowler'] === selectedFormation.bowl;

                if (!formationMatch) {
                    setValidationError(`⚠️ Team doesn't match ${selectedFormation.name} formation`);
                    return;
                }
            }
            setValidationError('✅ Team is complete and valid!');
        } else {
            setValidationError(`${11 - filledPositions.length} more player(s) needed`);
        }
    };

    const addPlayerToTeam = (player, index) => {
        if (myTeam.includes(player)) {
            alert('Player already in team!');
            return;
        }
        const newTeam = [...myTeam];
        newTeam[index] = player;
        setMyTeam(newTeam);
    };

    const removePlayerFromTeam = (index) => {
        const newTeam = [...myTeam];
        newTeam[index] = null;
        setMyTeam(newTeam);
    };

    const clearTeam = () => {
        if (window.confirm('Clear entire team?')) {
            setMyTeam(Array(11).fill(null));
            setTeamLogo('');
        }
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTeamLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const saveTeam = async () => {
        if (!teamName) {
            alert('Please enter a team name');
            return;
        }
        const filledPlayers = myTeam.filter(p => p !== null);
        if (filledPlayers.length === 0) {
            alert('Team is empty!');
            return;
        }

        try {
            const response = await teamAPI.createTeam(
                currentUser,
                teamName,
                selectedFormation.id,
                selectedFormation.name,
                myTeam
            );

            if (response.success) {
                setShowSaveModal(false);
                setTeamName('');
                loadTeamsFromBackend();
                alert('Team saved successfully!');
            } else {
                alert(response.error || 'Failed to save team');
            }
        } catch (error) {
            console.error('Error saving team:', error);
            alert('Failed to save team to server. Make sure the backend is running.');
        }
    };

    const loadTeam = (team) => {
        setMyTeam(team.players);
        setShowLoadModal(false);
        alert(`Loaded team: ${team.name}`);
    };

    const deleteTeam = async (id) => {
        if (window.confirm('Delete this team?')) {
            try {
                const response = await teamAPI.deleteTeam(id);
                if (response.success) {
                    loadTeamsFromBackend();
                    alert('Team deleted successfully!');
                } else {
                    alert('Failed to delete team');
                }
            } catch (error) {
                console.error('Error deleting team:', error);
                alert('Failed to delete team from server');
            }
        }
    };

    const exportTeamAsText = () => {
        const filledPlayers = myTeam.filter(p => p !== null);
        if (filledPlayers.length === 0) {
            alert('No players in team!');
            return;
        }

        let text = `🏏 MY CRICKET TEAM 11 🏏\n`;
        text += `Formation: ${selectedFormation.name}\n\n`;

        filledPlayers.forEach((player, idx) => {
            text += `${idx + 1}. ${player.name} (${player.role}) - ${player.country}\n`;
            text += `   Rating: ${player.rating} | ${player.specialty}\n\n`;
        });

        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'my-team-11.txt';
        a.click();
    };

    const filteredPlayers = playerDatabase
        .filter(player => {
            const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                player.country.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRole = filterRole === 'All' || player.role === filterRole;
            const matchesCountry = filterCountry === 'All' || player.country === filterCountry;
            return matchesSearch && matchesRole && matchesCountry;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'rating':
                    return b.rating - a.rating;
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'country':
                    return a.country.localeCompare(b.country);
                default:
                    return 0;
            }
        });

    const countries = [...new Set(playerDatabase.map(p => p.country))].sort();
    const teamStats = calculateTeamStats(myTeam.filter(p => p !== null));

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="team-builder-container-ultimate">
                {/* Hero Section */}
                <div className="builder-hero-ultimate">
                    <h1>🏆 Ultimate Team 11 Builder</h1>
                    <p>Build your dream cricket team with world-class players</p>
                    <div className="hero-actions-ultimate">
                        <button onClick={() => setShowSaveModal(true)} className="hero-btn-ultimate">
                            💾 Save Team
                        </button>
                        <button onClick={() => setShowLoadModal(true)} className="hero-btn-ultimate">
                            📂 Load Team
                        </button>
                        <button onClick={exportTeamAsText} className="hero-btn-ultimate">
                            📤 Export
                        </button>
                        <button onClick={clearTeam} className="hero-btn-ultimate danger">
                            🗑️ Clear
                        </button>
                    </div>
                </div>

                <div className="builder-content-ultimate">
                    {/* Left Panel - Team Formation (STICKY) */}
                    <div className="team-panel-ultimate">
                        <div className="panel-header-ultimate">
                            <h2>My Team</h2>
                            {validationError && (
                                <div className={`validation-message-ultimate ${validationError.includes('✅') ? 'success' : validationError.includes('⚠️') ? 'warning' : 'info'}`}>
                                    {validationError}
                                </div>
                            )}
                        </div>

                        {/* Team Logo Upload */}
                        <div className="team-logo-section-ultimate">
                            <label className="logo-label-ultimate">Team Logo:</label>
                            <div className="logo-upload-container-ultimate">
                                {teamLogo ? (
                                    <div className="logo-preview-ultimate">
                                        <img src={teamLogo} alt="Team Logo" />
                                        <button onClick={() => setTeamLogo('')} className="remove-logo-btn-ultimate">✕</button>
                                    </div>
                                ) : (
                                    <label className="upload-logo-btn-ultimate">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleLogoUpload}
                                            style={{ display: 'none' }}
                                        />
                                        📷 Upload Logo
                                    </label>
                                )}
                            </div>
                        </div>

                        {/* Formation Selector */}
                        <div className="formation-selector-ultimate">
                            <label>Formation:</label>
                            <select
                                value={selectedFormation.id}
                                onChange={(e) => {
                                    const formation = formations.find(f => f.id === parseInt(e.target.value));
                                    setSelectedFormation(formation);
                                }}
                                className="formation-select-ultimate"
                            >
                                {formations.map(f => (
                                    <option key={f.id} value={f.id}>
                                        {f.name}
                                    </option>
                                ))}
                            </select>
                            <p className="formation-desc-ultimate">{selectedFormation.description}</p>

                            {/* Formation Legend */}
                            <div className="formation-legend-ultimate">
                                <div className="legend-title-ultimate">Formation Guide:</div>
                                <div className="legend-items-ultimate">
                                    <div className="legend-item-ultimate">
                                        <span className="legend-number-ultimate wk">{selectedFormation.wk}</span>
                                        <span className="legend-text-ultimate">Wicket-Keeper</span>
                                    </div>
                                    <div className="legend-item-ultimate">
                                        <span className="legend-number-ultimate bat">{selectedFormation.bat}</span>
                                        <span className="legend-text-ultimate">Batsman</span>
                                    </div>
                                    <div className="legend-item-ultimate">
                                        <span className="legend-number-ultimate ar">{selectedFormation.ar}</span>
                                        <span className="legend-text-ultimate">All-Rounder</span>
                                    </div>
                                    <div className="legend-item-ultimate">
                                        <span className="legend-number-ultimate bowl">{selectedFormation.bowl}</span>
                                        <span className="legend-text-ultimate">Bowler</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Custom Formation Editor */}
                        {selectedFormation.id === 10 && (
                            <div className="custom-formation-ultimate">
                                <h4>Custom Formation</h4>
                                <div className="formation-inputs-ultimate">
                                    <div>
                                        <label>WK:</label>
                                        <input type="number" min="1" max="8"
                                            value={customFormation.wk}
                                            onChange={(e) => setCustomFormation({ ...customFormation, wk: parseInt(e.target.value) })}
                                        />
                                    </div>
                                    <div>
                                        <label>BAT:</label>
                                        <input type="number" min="0" max="10"
                                            value={customFormation.bat}
                                            onChange={(e) => setCustomFormation({ ...customFormation, bat: parseInt(e.target.value) })}
                                        />
                                    </div>
                                    <div>
                                        <label>AR:</label>
                                        <input type="number" min="0" max="10"
                                            value={customFormation.ar}
                                            onChange={(e) => setCustomFormation({ ...customFormation, ar: parseInt(e.target.value) })}
                                        />
                                    </div>
                                    <div>
                                        <label>BOWL:</label>
                                        <input type="number" min="0" max="10"
                                            value={customFormation.bowl}
                                            onChange={(e) => setCustomFormation({ ...customFormation, bowl: parseInt(e.target.value) })}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Team Slots */}
                        <div className="team-slots-ultimate">
                            {myTeam.map((player, index) => (
                                <TeamSlot
                                    key={index}
                                    index={index}
                                    player={player}
                                    onDrop={(player) => addPlayerToTeam(player, index)}
                                    onRemove={() => removePlayerFromTeam(index)}
                                />
                            ))}
                        </div>

                        {/* Team Stats */}
                        {teamStats.count > 0 && (
                            <div className="team-stats-ultimate">
                                <h3>Team Statistics</h3>
                                <div className="stats-grid-ultimate">
                                    <div className="stat-ultimate">
                                        <span className="stat-label-ultimate">Players</span>
                                        <span className="stat-value-ultimate">{teamStats.count}/11</span>
                                    </div>
                                    <div className="stat-ultimate">
                                        <span className="stat-label-ultimate">Avg Rating</span>
                                        <span className="stat-value-ultimate">{teamStats.avgRating}</span>
                                    </div>
                                    <div className="stat-ultimate">
                                        <span className="stat-label-ultimate">WK</span>
                                        <span className="stat-value-ultimate">{teamStats.wk}</span>
                                    </div>
                                    <div className="stat-ultimate">
                                        <span className="stat-label-ultimate">BAT</span>
                                        <span className="stat-value-ultimate">{teamStats.bat}</span>
                                    </div>
                                    <div className="stat-ultimate">
                                        <span className="stat-label-ultimate">AR</span>
                                        <span className="stat-value-ultimate">{teamStats.ar}</span>
                                    </div>
                                    <div className="stat-ultimate">
                                        <span className="stat-label-ultimate">BOWL</span>
                                        <span className="stat-value-ultimate">{teamStats.bowl}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Panel - Player Database (SCROLLS WITH BODY) */}
                    <div className="players-panel-ultimate">
                        <div className="panel-header-ultimate">
                            <h2>Player Database ({filteredPlayers.length})</h2>
                        </div>

                        {/* Filters */}
                        <div className="filters-section-ultimate">
                            <input
                                type="text"
                                placeholder="Search players..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input-ultimate"
                            />
                            <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)} className="filter-select-ultimate">
                                <option value="All">All Roles</option>
                                <option value="Batsman">Batsman</option>
                                <option value="Bowler">Bowler</option>
                                <option value="All-Rounder">All-Rounder</option>
                                <option value="Wicket-Keeper">Wicket-Keeper</option>
                            </select>
                            <select value={filterCountry} onChange={(e) => setFilterCountry(e.target.value)} className="filter-select-ultimate">
                                <option value="All">All Countries</option>
                                {countries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select-ultimate">
                                <option value="rating">Sort by Rating</option>
                                <option value="name">Sort by Name</option>
                                <option value="country">Sort by Country</option>
                            </select>
                        </div>

                        {/* Players Grid */}
                        <div className="players-grid-ultimate">
                            {filteredPlayers.map(player => (
                                <PlayerCard key={player.id} player={player} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Save Modal */}
                {showSaveModal && (
                    <div className="modal-overlay-ultimate" onClick={() => setShowSaveModal(false)}>
                        <div className="modal-content-ultimate" onClick={(e) => e.stopPropagation()}>
                            <h2>Save Team</h2>
                            <input
                                type="text"
                                placeholder="Enter team name..."
                                value={teamName}
                                onChange={(e) => setTeamName(e.target.value)}
                                className="team-name-input-ultimate"
                            />
                            <div className="modal-actions-ultimate">
                                <button onClick={() => setShowSaveModal(false)} className="btn-cancel-ultimate">Cancel</button>
                                <button onClick={saveTeam} className="btn-save-ultimate">Save</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Load Modal */}
                {showLoadModal && (
                    <div className="modal-overlay-ultimate" onClick={() => setShowLoadModal(false)}>
                        <div className="modal-content-ultimate large" onClick={(e) => e.stopPropagation()}>
                            <h2>Load Saved Team</h2>
                            {savedTeams.length === 0 ? (
                                <p className="no-teams-ultimate">No saved teams yet</p>
                            ) : (
                                <div className="saved-teams-list-ultimate">
                                    {savedTeams.map(team => (
                                        <div key={team.id} className="saved-team-item-ultimate">
                                            <div className="team-info-ultimate">
                                                <h4>{team.name}</h4>
                                                <p>{team.formation} • {team.players.filter(p => p).length} players</p>
                                                <span className="team-date-ultimate">{new Date(team.createdAt).toLocaleDateString()}</span>
                                            </div>
                                            <div className="team-actions-ultimate">
                                                <button onClick={() => loadTeam(team)} className="btn-load-ultimate">Load</button>
                                                <button onClick={() => deleteTeam(team.id)} className="btn-delete-ultimate">Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <button onClick={() => setShowLoadModal(false)} className="btn-close-modal-ultimate">Close</button>
                        </div>
                    </div>
                )}
            </div>
        </DndProvider>
    );
};

const PlayerCard = ({ player }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemType,
        item: { player },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const getRoleColor = (role) => {
        switch (role) {
            case 'Batsman': return '#4CAF50';
            case 'Bowler': return '#F44336';
            case 'All-Rounder': return '#FF9800';
            case 'Wicket-Keeper': return '#2196F3';
            default: return '#999';
        }
    };

    return (
        <div ref={drag} className={`player-card-ultimate ${isDragging ? 'dragging' : ''}`}>
            <div className="player-rating-ultimate" style={{ background: player.rating >= 90 ? '#FFD700' : '#ddd' }}>
                {player.rating}
            </div>
            <div className="player-image-ultimate" style={{ backgroundImage: `url(${player.image})` }} />
            <h4 className="player-name-ultimate">{player.name}</h4>
            <div className="player-role-ultimate" style={{ background: getRoleColor(player.role) }}>
                {player.role}
            </div>
            <p className="player-country-ultimate">{player.country}</p>
            <p className="player-specialty-ultimate">{player.specialty}</p>
            <div className="player-traits-ultimate">
                {player.traits.slice(0, 2).map((trait, idx) => (
                    <span key={idx} className="trait-ultimate">{trait}</span>
                ))}
            </div>
        </div>
    );
};

const TeamSlot = ({ index, player, onDrop, onRemove }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemType,
        drop: (item) => onDrop(item.player),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    const getRoleColor = (role) => {
        switch (role) {
            case 'Batsman': return '#4CAF50';
            case 'Bowler': return '#F44336';
            case 'All-Rounder': return '#FF9800';
            case 'Wicket-Keeper': return '#2196F3';
            default: return '#999';
        }
    };

    return (
        <div ref={drop} className={`team-slot-ultimate ${isOver ? 'slot-hover' : ''} ${player ? 'filled' : ''}`}>
            {player ? (
                <div className="slot-player-ultimate">
                    <div className="slot-number-ultimate">{index + 1}</div>
                    <div className="slot-info-ultimate">
                        <h4>{player.name}</h4>
                        <span className="slot-role-ultimate" style={{ background: getRoleColor(player.role) }}>
                            {player.role}
                        </span>
                        <span className="slot-rating-ultimate">⭐ {player.rating}</span>
                    </div>
                    <button onClick={onRemove} className="slot-remove-ultimate">✕</button>
                </div>
            ) : (
                <div className="slot-empty-ultimate">
                    <span className="slot-number-ultimate">{index + 1}</span>
                    <span className="slot-text-ultimate">Drag player here</span>
                </div>
            )}
        </div>
    );
};

const calculateTeamStats = (players) => {
    if (players.length === 0) return { count: 0 };

    const counts = {
        wk: players.filter(p => p.role === 'Wicket-Keeper').length,
        bat: players.filter(p => p.role === 'Batsman').length,
        ar: players.filter(p => p.role === 'All-Rounder').length,
        bowl: players.filter(p => p.role === 'Bowler').length
    };

    const avgRating = (players.reduce((sum, p) => sum + p.rating, 0) / players.length).toFixed(1);

    return {
        count: players.length,
        avgRating,
        ...counts
    };
};

export default TeamBuilder;