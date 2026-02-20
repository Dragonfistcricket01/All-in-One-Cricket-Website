//import React, { useState, useEffect, useRef } from 'react';
//import axios from 'axios';
//import './LiveScoreTicker.css';
//
//function LiveScoreTicker() {
//    const [matches, setMatches] = useState([]);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState(null);
//    const scrollRef = useRef(null);
//
//    // ==================== API CONFIGURATION ====================
//    // Switch between APIs by changing this value: 'cricapi' or 'sportmonks'
//    const API_PROVIDER = 'cricapi'; // Change to 'sportmonks' when you get token
//
//    // CricAPI Configuration
//    //const CRICAPI_KEY = 'YOUR_CRICAPI_KEY_HERE'; // Replace with your CricAPI key
//    const CRICAPI_KEY = '****************************'; // Replace with your CricAPI key
//    const CRICAPI_BASE_URL = 'http://localhost:5000/api/cricapi/matches/current';
//
//    // Sportmonks Configuration
//    const SPORTMONKS_TOKEN = 'YOUR_SPORTMONKS_TOKEN_HERE'; // Replace when you get it
//    const SPORTMONKS_BASE_URL = 'https://cricket.sportmonks.com/api/v2.0';
//
//    // ==================== FETCH MATCHES ====================
//    useEffect(() => {
//        fetchMatches();
//
//        // Auto-refresh every 60 seconds
//        const interval = setInterval(() => {
//            fetchMatches();
//        }, 60000);
//
//        return () => clearInterval(interval);
//    }, []);
//
//    const fetchMatches = async () => {
//        try {
//            setError(null);
//
//            if (API_PROVIDER === 'cricapi') {
//                await fetchFromCricAPI();
//            } else if (API_PROVIDER === 'sportmonks') {
//                await fetchFromSportmonks();
//            }
//
//            setLoading(false);
//        } catch (error) {
//            console.error('Error fetching matches:', error);
//            setError('Unable to load matches');
//            // Use mock data as fallback
//            setMatches(getMockMatches());
//            setLoading(false);
//        }
//    };
//
//    // ==================== CRICAPI FETCH ====================
//    const fetchFromCricAPI = async () => {
//        try {
//            // Get current matches
//            const response = await axios.get(
//                `${CRICAPI_BASE_URL}/currentMatches`,
//                {
//                    params: {
//                        apikey: CRICAPI_KEY,
//                        offset: 0
//                    }
//                }
//            );
//
//            if (response.data && response.data.data) {
//                const formattedMatches = formatCricAPIData(response.data.data);
//                setMatches(formattedMatches);
//            } else {
//                setMatches(getMockMatches());
//            }
//        } catch (error) {
//            console.error('CricAPI Error:', error);
//            setMatches(getMockMatches());
//        }
//    };
//
//    // ==================== SPORTMONKS FETCH ====================
//    const fetchFromSportmonks = async () => {
//        try {
//            // Get live scores
//            const response = await axios.get(
//                `${SPORTMONKS_BASE_URL}/livescores`,
//                {
//                    params: {
//                        api_token: SPORTMONKS_TOKEN,
//                        include: 'localteam,visitorteam,runs,venue,league,stage'
//                    }
//                }
//            );
//
//            if (response.data && response.data.data && response.data.data.length > 0) {
//                const formattedMatches = formatSportmonksData(response.data.data);
//                setMatches(formattedMatches);
//            } else {
//                // Try fixtures if no live matches
//                const fixturesResponse = await axios.get(
//                    `${SPORTMONKS_BASE_URL}/fixtures`,
//                    {
//                        params: {
//                            api_token: SPORTMONKS_TOKEN,
//                            include: 'localteam,visitorteam,runs,venue,league',
//                            filter: `date:${new Date().toISOString().split('T')[0]}`
//                        }
//                    }
//                );
//
//                if (fixturesResponse.data && fixturesResponse.data.data) {
//                    const formattedMatches = formatSportmonksData(fixturesResponse.data.data);
//                    setMatches(formattedMatches);
//                } else {
//                    setMatches(getMockMatches());
//                }
//            }
//        } catch (error) {
//            console.error('Sportmonks Error:', error);
//            setMatches(getMockMatches());
//        }
//    };
//
//    // ==================== FORMAT CRICAPI DATA ====================
//    const formatCricAPIData = (data) => {
//        return data.slice(0, 10).map(match => {
//            // Determine status
//            let status = 'SCHEDULED';
//            let matchStarted = false;
//            let matchEnded = false;
//
//            if (match.matchEnded) {
//                status = 'COMPLETED';
//                matchEnded = true;
//                matchStarted = true;
//            } else if (match.matchStarted) {
//                status = 'LIVE';
//                matchStarted = true;
//            }
//
//            // Get team names
//            const teams = match.teams || [];
//            const team1 = teams[0] || 'Team 1';
//            const team2 = teams[1] || 'Team 2';
//
//            // Get scores
//            const scores = match.score || [];
//            const score1 = scores[0] || { r: 0, w: 0, o: 0 };
//            const score2 = scores[1] || { r: 0, w: 0, o: 0 };
//
//            return {
//                id: match.id,
//                name: match.name || `${team1} vs ${team2}`,
//                matchType: match.matchType || 't20',
//                status: match.status || status,
//                venue: match.venue || '',
//                date: match.date || match.dateTimeGMT,
//                dateTimeGMT: match.dateTimeGMT,
//                teams: [team1, team2],
//                score: [
//                    {
//                        r: score1.r || 0,
//                        w: score1.w || 0,
//                        o: score1.o || 0,
//                        inning: score1.inning || `${team1} Inning`
//                    },
//                    {
//                        r: score2.r || 0,
//                        w: score2.w || 0,
//                        o: score2.o || 0,
//                        inning: score2.inning || `${team2} Inning`
//                    }
//                ],
//                matchStarted,
//                matchEnded,
//                league: match.series || '',
//                stage: match.matchType || ''
//            };
//        });
//    };
//
//    // ==================== FORMAT SPORTMONKS DATA ====================
//    const formatSportmonksData = (data) => {
//        return data.slice(0, 10).map(match => {
//            const localTeam = match.localteam?.name || 'Team 1';
//            const visitorTeam = match.visitorteam?.name || 'Team 2';
//
//            const localScore = match.runs?.find(r => r.team_id === match.localteam?.id);
//            const visitorScore = match.runs?.find(r => r.team_id === match.visitorteam?.id);
//
//            let status = 'SCHEDULED';
//            let matchStarted = false;
//            let matchEnded = false;
//
//            const matchStatus = match.status?.toLowerCase() || '';
//
//            if (matchStatus.includes('finished') || matchStatus === 'fin') {
//                status = 'COMPLETED';
//                matchEnded = true;
//                matchStarted = true;
//            } else if (matchStatus.includes('live') || matchStatus.includes('progress')) {
//                status = 'LIVE';
//                matchStarted = true;
//            }
//
//            return {
//                id: match.id,
//                name: `${localTeam} vs ${visitorTeam}`,
//                matchType: match.type || 't20',
//                status: match.note || status,
//                venue: match.venue?.name || '',
//                date: match.starting_at,
//                dateTimeGMT: match.starting_at,
//                teams: [localTeam, visitorTeam],
//                score: [
//                    {
//                        r: localScore?.score || 0,
//                        w: localScore?.wickets || 0,
//                        o: localScore?.overs || 0,
//                        inning: `${localTeam} Inning`
//                    },
//                    {
//                        r: visitorScore?.score || 0,
//                        w: visitorScore?.wickets || 0,
//                        o: visitorScore?.overs || 0,
//                        inning: `${visitorTeam} Inning`
//                    }
//                ],
//                matchStarted,
//                matchEnded,
//                league: match.league?.name || '',
//                stage: match.stage?.name || ''
//            };
//        });
//    };
//
//    // ==================== MOCK DATA ====================
//    const getMockMatches = () => [
//        {
//            id: '1',
//            name: 'India vs West Indies, 2nd Test',
//            matchType: 'test',
//            status: 'Day 1 - India elected to bat',
//            venue: 'Wankhede Stadium, Mumbai',
//            date: '2025-10-11',
//            dateTimeGMT: '2025-10-11T04:30:00',
//            teams: ['India', 'West Indies'],
//            score: [
//                { r: 318, w: 2, o: 90, inning: 'India Inning 1' },
//                { r: 0, w: 0, o: 0, inning: 'West Indies Inning 1' }
//            ],
//            matchStarted: true,
//            matchEnded: false,
//            league: 'Test Series',
//            stage: '2nd Test'
//        },
//        {
//            id: '2',
//            name: 'UAE vs Malaysia, 7th Match',
//            matchType: 't20',
//            status: 'United Arab Emirates won by 6 wickets',
//            venue: 'Dubai International Cricket Stadium',
//            date: '2025-10-10',
//            teams: ['UAE', 'Malaysia'],
//            score: [
//                { r: 167, w: 4, o: 19.2, inning: 'UAE Inning 1' },
//                { r: 161, w: 5, o: 20, inning: 'Malaysia Inning 1' }
//            ],
//            matchStarted: true,
//            matchEnded: true,
//            league: 'ICC Men\'s T20 World Cup',
//            stage: 'Group Stage'
//        },
//        {
//            id: '3',
//            name: 'Namibia vs South Africa, Only T20I',
//            matchType: 't20',
//            status: 'Match not started',
//            venue: 'Wanderers Stadium, Windhoek',
//            date: '2025-10-11',
//            dateTimeGMT: '2025-10-11T16:00:00',
//            teams: ['Namibia', 'South Africa'],
//            score: [],
//            matchStarted: false,
//            matchEnded: false,
//            league: 'T20 International',
//            stage: 'Only T20I'
//        },
//        {
//            id: '4',
//            name: 'Pakistan vs South Africa, 1st Test',
//            matchType: 'test',
//            status: 'Stumps - Day 1',
//            venue: 'National Stadium, Karachi',
//            date: '2025-10-10',
//            teams: ['Pakistan', 'South Africa'],
//            score: [
//                { r: 245, w: 6, o: 85, inning: 'Pakistan Inning 1' },
//                { r: 0, w: 0, o: 0, inning: 'South Africa Inning 1' }
//            ],
//            matchStarted: true,
//            matchEnded: false,
//            league: 'Test Series',
//            stage: '1st Test'
//        },
//        {
//            id: '5',
//            name: 'Afghanistan vs Bangladesh, 2nd ODI',
//            matchType: 'odi',
//            status: 'Starts at 6:00 PM',
//            venue: 'Sharjah Cricket Stadium',
//            date: '2025-10-11',
//            dateTimeGMT: '2025-10-11T13:00:00',
//            teams: ['Afghanistan', 'Bangladesh'],
//            score: [],
//            matchStarted: false,
//            matchEnded: false,
//            league: 'ODI Series',
//            stage: '2nd ODI'
//        }
//    ];
//
//    // ==================== HELPER FUNCTIONS ====================
//    const scroll = (direction) => {
//        if (scrollRef.current) {
//            const scrollAmount = 300;
//            scrollRef.current.scrollBy({
//                left: direction === 'left' ? -scrollAmount : scrollAmount,
//                behavior: 'smooth'
//            });
//        }
//    };
//
//    const getMatchStatus = (match) => {
//        if (match.matchEnded) return 'COMPLETED';
//        if (match.matchStarted) return 'LIVE';
//        return 'SCHEDULED';
//    };
//
//    const getStatusColor = (status) => {
//        switch (status) {
//            case 'LIVE': return 'live';
//            case 'COMPLETED': return 'completed';
//            case 'SCHEDULED': return 'scheduled';
//            default: return 'default';
//        }
//    };
//
//    const getMatchFormat = (type) => {
//        if (!type) return 'MATCH';
//        switch (type.toLowerCase()) {
//            case 'test': return 'TEST';
//            case 't20': return 'T20I';
//            case 't20i': return 'T20I';
//            case 'odi': return 'ODI';
//            default: return type.toUpperCase();
//        }
//    };
//
//    const getCountdown = (dateTimeGMT) => {
//        if (!dateTimeGMT) return '';
//
//        const now = new Date();
//        const matchTime = new Date(dateTimeGMT);
//        const diff = matchTime - now;
//
//        if (diff <= 0) return 'Starting soon';
//
//        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//
//        if (days > 0) return `in ${days}d ${hours}h`;
//        if (hours > 0) return `in ${hours}h ${minutes}m`;
//        return `in ${minutes}m`;
//    };
//
//    // ==================== RENDER ====================
//    if (loading) {
//        return (
//            <div className="live-score-ticker-header">
//                <div className="ticker-loading-header">
//                    <i className="ri-loader-4-line spinner"></i>
//                    <span>Loading matches...</span>
//                </div>
//            </div>
//        );
//    }
//
//    if (matches.length === 0) {
//        return (
//            <div className="live-score-ticker-header">
//                <div className="ticker-no-matches-header">
//                    <i className="ri-information-line"></i>
//                    <span>No matches available</span>
//                </div>
//            </div>
//        );
//    }
//
//    return (
//        <div className="live-score-ticker-header">
//            {/* API Indicator */}
//            <div className="api-indicator-header">
//                {API_PROVIDER === 'cricapi' ? '🟢 CricAPI' : '🔵 Sportmonks'}
//            </div>
//
//            {/* Left Scroll Button */}
//            <button
//                className="ticker-scroll-btn-header left"
//                onClick={() => scroll('left')}
//                aria-label="Scroll left"
//            >
//                <i className="ri-arrow-left-s-line"></i>
//            </button>
//
//            {/* Scrollable Container */}
//            <div className="ticker-scroll-container-header" ref={scrollRef}>
//                <div className="ticker-matches-header">
//                    {matches.map((match) => {
//                        const status = getMatchStatus(match);
//                        const statusColor = getStatusColor(status);
//
//                        return (
//                            <div
//                                key={match.id}
//                                className={`match-card-header ${statusColor}`}
//                            >
//                                {/* Match Header */}
//                                <div className="match-header-header">
//                                    <span className={`match-status-header ${statusColor}`}>
//                                        {status === 'LIVE' && <span className="live-dot">🔴</span>}
//                                        {status}
//                                    </span>
//                                    <span className="match-format-header">{getMatchFormat(match.matchType)}</span>
//                                </div>
//
//                                {/* League Info */}
//                                {match.league && (
//                                    <div className="match-league-header">
//                                        {match.league}
//                                        {match.stage && ` • ${match.stage}`}
//                                    </div>
//                                )}
//
//                                {/* Teams & Scores */}
//                                <div className="match-teams-header">
//                                    {match.teams && match.teams.length >= 2 && (
//                                        <>
//                                            <div className="team-header">
//                                                <span className="team-name-header">{match.teams[0]}</span>
//                                                {match.score && match.score[0] && match.score[0].r > 0 && (
//                                                    <span className="team-score-header">
//                                                        {match.score[0].r}/{match.score[0].w}
//                                                        {match.score[0].o > 0 && ` (${match.score[0].o})`}
//                                                    </span>
//                                                )}
//                                            </div>
//
//                                            <div className="team-header">
//                                                <span className="team-name-header">{match.teams[1]}</span>
//                                                {match.score && match.score[1] && match.score[1].r > 0 && (
//                                                    <span className="team-score-header">
//                                                        {match.score[1].r}/{match.score[1].w}
//                                                        {match.score[1].o > 0 && ` (${match.score[1].o})`}
//                                                    </span>
//                                                )}
//                                            </div>
//                                        </>
//                                    )}
//                                </div>
//
//                                {/* Match Info */}
//                                <div className="match-info-header">
//                                    {status === 'LIVE' && (
//                                        <span className="match-detail-header">{match.status}</span>
//                                    )}
//                                    {status === 'COMPLETED' && (
//                                        <span className="match-result-header">{match.status}</span>
//                                    )}
//                                    {status === 'SCHEDULED' && (
//                                        <span className="match-countdown-header">
//                                            <i className="ri-time-line"></i> Starts {getCountdown(match.dateTimeGMT)}
//                                        </span>
//                                    )}
//                                </div>
//                            </div>
//                        );
//                    })}
//                </div>
//            </div>
//
//            {/* Right Scroll Button */}
//            <button
//                className="ticker-scroll-btn-header right"
//                onClick={() => scroll('right')}
//                aria-label="Scroll right"
//            >
//                <i className="ri-arrow-right-s-line"></i>
//            </button>
//        </div>
//    );
//}
//
//export default LiveScoreTicker;


//import React, { useState, useEffect, useRef } from 'react';
//import axios from 'axios';
//import './LiveScoreTicker.css';
//
//function LiveScoreTicker() {
//    const [matches, setMatches] = useState([]);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState(null);
//    const scrollRef = useRef(null);
//
//    // Backend API URL
//    const BACKEND_URL = 'http://localhost:5000/api/rapidapi';
//
//    // ==================== FETCH MATCHES ====================
//    useEffect(() => {
//        fetchMatches();
//
//        // Auto-refresh every 60 seconds
//        const interval = setInterval(() => {
//            fetchMatches();
//        }, 60000);
//
//        return () => clearInterval(interval);
//    }, []);
//
//    const fetchMatches = async () => {
//        try {
//            setError(null);
//
//            // Fetch live matches from RapidAPI via backend
//            const response = await axios.get(`${BACKEND_URL}/matches/live`);
//
//            if (response.data && response.data.typeMatches) {
//                const formattedMatches = formatRapidAPIData(response.data.typeMatches);
//                setMatches(formattedMatches);
//            } else {
//                setMatches(getMockMatches());
//            }
//
//            setLoading(false);
//        } catch (error) {
//            console.error('Error fetching matches:', error);
//            setError('Unable to load matches');
//            setMatches(getMockMatches());
//            setLoading(false);
//        }
//    };
//
//    // ==================== FORMAT RAPIDAPI DATA ====================
//    const formatRapidAPIData = (typeMatches) => {
//        const allMatches = [];
//
//        // Extract matches from different categories
//        typeMatches.forEach(category => {
//            if (category.seriesMatches) {
//                category.seriesMatches.forEach(series => {
//                    if (series.seriesAdWrapper && series.seriesAdWrapper.matches) {
//                        series.seriesAdWrapper.matches.forEach(matchWrapper => {
//                            if (matchWrapper.matchInfo) {
//                                const match = matchWrapper.matchInfo;
//                                const matchScore = matchWrapper.matchScore;
//
//                                const formattedMatch = {
//                                    id: match.matchId || Math.random().toString(),
//                                    name: match.matchDesc || `${match.team1?.teamName || 'Team 1'} vs ${match.team2?.teamName || 'Team 2'}`,
//                                    matchType: match.matchFormat?.toLowerCase() || 't20',
//                                    status: match.status || 'Scheduled',
//                                    venue: match.venueInfo?.ground || '',
//                                    date: new Date(parseInt(match.startDate)).toISOString(),
//                                    dateTimeGMT: new Date(parseInt(match.startDate)).toISOString(),
//                                    teams: [
//                                        match.team1?.teamName || 'Team 1',
//                                        match.team2?.teamName || 'Team 2'
//                                    ],
//                                    score: [
//                                        {
//                                            r: matchScore?.team1Score?.inngs1?.runs || 0,
//                                            w: matchScore?.team1Score?.inngs1?.wickets || 0,
//                                            o: matchScore?.team1Score?.inngs1?.overs || 0,
//                                            inning: `${match.team1?.teamName} Inning 1`
//                                        },
//                                        {
//                                            r: matchScore?.team2Score?.inngs1?.runs || 0,
//                                            w: matchScore?.team2Score?.inngs1?.wickets || 0,
//                                            o: matchScore?.team2Score?.inngs1?.overs || 0,
//                                            inning: `${match.team2?.teamName} Inning 1`
//                                        }
//                                    ],
//                                    matchStarted: match.state !== 'Preview',
//                                    matchEnded: match.state === 'Complete',
//                                    league: match.seriesName || '',
//                                    stage: match.matchFormat || ''
//                                };
//
//                                allMatches.push(formattedMatch);
//                            }
//                        });
//                    }
//                });
//            }
//        });
//
//        return allMatches.slice(0, 10); // Limit to 10 matches
//    };
//
//    // ==================== MOCK DATA ====================
//    const getMockMatches = () => [
//        {
//            id: '1',
//            name: 'India vs West Indies, 2nd Test',
//            matchType: 'test',
//            status: 'Day 1 - India elected to bat',
//            venue: 'Wankhede Stadium, Mumbai',
//            date: '2025-10-11',
//            dateTimeGMT: '2025-10-11T04:30:00',
//            teams: ['India', 'West Indies'],
//            score: [
//                { r: 318, w: 2, o: 90, inning: 'India Inning 1' },
//                { r: 0, w: 0, o: 0, inning: 'West Indies Inning 1' }
//            ],
//            matchStarted: true,
//            matchEnded: false,
//            league: 'Test Series',
//            stage: '2nd Test'
//        },
//        {
//            id: '2',
//            name: 'UAE vs Malaysia, 7th Match',
//            matchType: 't20',
//            status: 'United Arab Emirates won by 6 wickets',
//            venue: 'Dubai International Cricket Stadium',
//            date: '2025-10-10',
//            teams: ['UAE', 'Malaysia'],
//            score: [
//                { r: 167, w: 4, o: 19.2, inning: 'UAE Inning 1' },
//                { r: 161, w: 5, o: 20, inning: 'Malaysia Inning 1' }
//            ],
//            matchStarted: true,
//            matchEnded: true,
//            league: 'ICC Men\'s T20 World Cup',
//            stage: 'Group Stage'
//        },
//        {
//            id: '3',
//            name: 'Namibia vs South Africa, Only T20I',
//            matchType: 't20',
//            status: 'Match not started',
//            venue: 'Wanderers Stadium, Windhoek',
//            date: '2025-10-11',
//            dateTimeGMT: '2025-10-11T16:00:00',
//            teams: ['Namibia', 'South Africa'],
//            score: [],
//            matchStarted: false,
//            matchEnded: false,
//            league: 'T20 International',
//            stage: 'Only T20I'
//        }
//    ];
//
//    // ==================== HELPER FUNCTIONS ====================
//    const scroll = (direction) => {
//        if (scrollRef.current) {
//            const scrollAmount = 300;
//            scrollRef.current.scrollBy({
//                left: direction === 'left' ? -scrollAmount : scrollAmount,
//                behavior: 'smooth'
//            });
//        }
//    };
//
//    const getMatchStatus = (match) => {
//        if (match.matchEnded) return 'COMPLETED';
//        if (match.matchStarted) return 'LIVE';
//        return 'SCHEDULED';
//    };
//
//    const getStatusColor = (status) => {
//        switch (status) {
//            case 'LIVE': return 'live';
//            case 'COMPLETED': return 'completed';
//            case 'SCHEDULED': return 'scheduled';
//            default: return 'default';
//        }
//    };
//
//    const getMatchFormat = (type) => {
//        if (!type) return 'MATCH';
//        switch (type.toLowerCase()) {
//            case 'test': return 'TEST';
//            case 't20': return 'T20I';
//            case 't20i': return 'T20I';
//            case 'odi': return 'ODI';
//            default: return type.toUpperCase();
//        }
//    };
//
//    const getCountdown = (dateTimeGMT) => {
//        if (!dateTimeGMT) return '';
//
//        const now = new Date();
//        const matchTime = new Date(dateTimeGMT);
//        const diff = matchTime - now;
//
//        if (diff <= 0) return 'Starting soon';
//
//        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//
//        if (days > 0) return `in ${days}d ${hours}h`;
//        if (hours > 0) return `in ${hours}h ${minutes}m`;
//        return `in ${minutes}m`;
//    };
//
//    // ==================== RENDER ====================
//    if (loading) {
//        return (
//            <div className="live-score-ticker-header">
//                <div className="ticker-loading-header">
//                    <i className="ri-loader-4-line spinner"></i>
//                    <span>Loading matches...</span>
//                </div>
//            </div>
//        );
//    }
//
//    if (matches.length === 0) {
//        return (
//            <div className="live-score-ticker-header">
//                <div className="ticker-no-matches-header">
//                    <i className="ri-information-line"></i>
//                    <span>No matches available</span>
//                </div>
//            </div>
//        );
//    }
//
//    return (
//        <div className="live-score-ticker-header">
//            {/* API Indicator */}
//            <div className="api-indicator-header">
//                🟢 RapidAPI Live
//            </div>
//
//            {/* Left Scroll Button */}
//            <button
//                className="ticker-scroll-btn-header left"
//                onClick={() => scroll('left')}
//                aria-label="Scroll left"
//            >
//                <i className="ri-arrow-left-s-line"></i>
//            </button>
//
//            {/* Scrollable Container */}
//            <div className="ticker-scroll-container-header" ref={scrollRef}>
//                <div className="ticker-matches-header">
//                    {matches.map((match) => {
//                        const status = getMatchStatus(match);
//                        const statusColor = getStatusColor(status);
//
//                        return (
//                            <div
//                                key={match.id}
//                                className={`match-card-header ${statusColor}`}
//                            >
//                                {/* Match Header */}
//                                <div className="match-header-header">
//                                    <span className={`match-status-header ${statusColor}`}>
//                                        {status === 'LIVE' && <span className="live-dot">🔴</span>}
//                                        {status}
//                                    </span>
//                                    <span className="match-format-header">{getMatchFormat(match.matchType)}</span>
//                                </div>
//
//                                {/* League Info */}
//                                {match.league && (
//                                    <div className="match-league-header">
//                                        {match.league}
//                                        {match.stage && ` • ${match.stage}`}
//                                    </div>
//                                )}
//
//                                {/* Teams & Scores */}
//                                <div className="match-teams-header">
//                                    {match.teams && match.teams.length >= 2 && (
//                                        <>
//                                            <div className="team-header">
//                                                <span className="team-name-header">{match.teams[0]}</span>
//                                                {match.score && match.score[0] && match.score[0].r > 0 && (
//                                                    <span className="team-score-header">
//                                                        {match.score[0].r}/{match.score[0].w}
//                                                        {match.score[0].o > 0 && ` (${match.score[0].o})`}
//                                                    </span>
//                                                )}
//                                            </div>
//
//                                            <div className="team-header">
//                                                <span className="team-name-header">{match.teams[1]}</span>
//                                                {match.score && match.score[1] && match.score[1].r > 0 && (
//                                                    <span className="team-score-header">
//                                                        {match.score[1].r}/{match.score[1].w}
//                                                        {match.score[1].o > 0 && ` (${match.score[1].o})`}
//                                                    </span>
//                                                )}
//                                            </div>
//                                        </>
//                                    )}
//                                </div>
//
//                                {/* Match Info */}
//                                <div className="match-info-header">
//                                    {status === 'LIVE' && (
//                                        <span className="match-detail-header">{match.status}</span>
//                                    )}
//                                    {status === 'COMPLETED' && (
//                                        <span className="match-result-header">{match.status}</span>
//                                    )}
//                                    {status === 'SCHEDULED' && (
//                                        <span className="match-countdown-header">
//                                            <i className="ri-time-line"></i> Starts {getCountdown(match.dateTimeGMT)}
//                                        </span>
//                                    )}
//                                </div>
//                            </div>
//                        );
//                    })}
//                </div>
//            </div>
//
//            {/* Right Scroll Button */}
//            <button
//                className="ticker-scroll-btn-header right"
//                onClick={() => scroll('right')}
//                aria-label="Scroll right"
//            >
//                <i className="ri-arrow-right-s-line"></i>
//            </button>
//        </div>
//    );
//}
//
//export default LiveScoreTicker;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './LiveScoreTicker.css';

function LiveScoreTicker() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentAPI, setCurrentAPI] = useState('rapidapi'); // 'rapidapi' or 'cricapi'
    const scrollRef = useRef(null);

    // Backend API URLs
    const BACKEND_URL = 'http://localhost:5000/api';
    const RAPIDAPI_ENDPOINT = `${BACKEND_URL}/rapidapi/matches/live`;
    const CRICAPI_ENDPOINT = `${BACKEND_URL}/cricapi/matches/current`;

    // ==================== FETCH MATCHES WITH FALLBACK ====================
    useEffect(() => {
        fetchMatches();

        // Auto-refresh every 60 seconds
        const interval = setInterval(() => {
            fetchMatches();
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const fetchMatches = async () => {
        try {
            setError(null);

            // Try RapidAPI first
            if (currentAPI === 'rapidapi') {
                const rapidResult = await fetchFromRapidAPI();
                if (rapidResult.success) {
                    setLoading(false);
                    return;
                }
                // If RapidAPI fails, switch to CricAPI
                console.log('⚠️ RapidAPI failed, switching to CricAPI...');
                setCurrentAPI('cricapi');
            }

            // Try CricAPI as fallback
            const cricResult = await fetchFromCricAPI();
            if (cricResult.success) {
                setLoading(false);
                return;
            }

            // Both failed - use mock data
            console.log('❌ Both APIs failed, using mock data');
            setMatches(getMockMatches());
            setError('Using offline data');
            setLoading(false);

        } catch (error) {
            console.error('Error fetching matches:', error);
            setMatches(getMockMatches());
            setError('Unable to load live matches');
            setLoading(false);
        }
    };

    // ==================== FETCH FROM RAPIDAPI ====================
    const fetchFromRapidAPI = async () => {
        try {
            const response = await axios.get(RAPIDAPI_ENDPOINT, { timeout: 10000 });

            if (response.data && response.data.data && response.data.data.typeMatches) {
                const formattedMatches = formatRapidAPIData(response.data.data.typeMatches);
                setMatches(formattedMatches);
                setCurrentAPI('rapidapi');
                return { success: true };
            }

            return { success: false };
        } catch (error) {
            console.error('RapidAPI Error:', error);
            if (error.response?.data?.error === 'RATE_LIMIT_EXCEEDED') {
                console.log('⚠️ RapidAPI rate limit reached');
            }
            return { success: false };
        }
    };

    // ==================== FETCH FROM CRICAPI ====================
    const fetchFromCricAPI = async () => {
        try {
            const response = await axios.get(CRICAPI_ENDPOINT, { timeout: 10000 });

            if (response.data && response.data.data) {
                const formattedMatches = formatCricAPIData(response.data.data);
                setMatches(formattedMatches);
                setCurrentAPI('cricapi');
                return { success: true };
            }

            return { success: false };
        } catch (error) {
            console.error('CricAPI Error:', error);
            return { success: false };
        }
    };

    // ==================== FORMAT RAPIDAPI DATA ====================
    const formatRapidAPIData = (typeMatches) => {
        const allMatches = [];

        typeMatches.forEach(category => {
            if (category.seriesMatches) {
                category.seriesMatches.forEach(series => {
                    if (series.seriesAdWrapper && series.seriesAdWrapper.matches) {
                        series.seriesAdWrapper.matches.forEach(matchWrapper => {
                            if (matchWrapper.matchInfo) {
                                const match = matchWrapper.matchInfo;
                                const matchScore = matchWrapper.matchScore;

                                const formattedMatch = {
                                    id: match.matchId || Math.random().toString(),
                                    name: match.matchDesc || `${match.team1?.teamName || 'Team 1'} vs ${match.team2?.teamName || 'Team 2'}`,
                                    matchType: match.matchFormat?.toLowerCase() || 't20',
                                    status: match.status || 'Scheduled',
                                    venue: match.venueInfo?.ground || '',
                                    date: new Date(parseInt(match.startDate)).toISOString(),
                                    dateTimeGMT: new Date(parseInt(match.startDate)).toISOString(),
                                    teams: [
                                        match.team1?.teamName || 'Team 1',
                                        match.team2?.teamName || 'Team 2'
                                    ],
                                    score: [
                                        {
                                            r: matchScore?.team1Score?.inngs1?.runs || 0,
                                            w: matchScore?.team1Score?.inngs1?.wickets || 0,
                                            o: matchScore?.team1Score?.inngs1?.overs || 0,
                                            inning: `${match.team1?.teamName} Inning 1`
                                        },
                                        {
                                            r: matchScore?.team2Score?.inngs1?.runs || 0,
                                            w: matchScore?.team2Score?.inngs1?.wickets || 0,
                                            o: matchScore?.team2Score?.inngs1?.overs || 0,
                                            inning: `${match.team2?.teamName} Inning 1`
                                        }
                                    ],
                                    matchStarted: match.state !== 'Preview',
                                    matchEnded: match.state === 'Complete',
                                    league: match.seriesName || '',
                                    stage: match.matchFormat || ''
                                };

                                allMatches.push(formattedMatch);
                            }
                        });
                    }
                });
            }
        });

        return allMatches.slice(0, 10);
    };

    // ==================== FORMAT CRICAPI DATA ====================
    const formatCricAPIData = (data) => {
        return data.slice(0, 10).map(match => {
            let status = 'SCHEDULED';
            let matchStarted = false;
            let matchEnded = false;

            if (match.matchEnded) {
                status = 'COMPLETED';
                matchEnded = true;
                matchStarted = true;
            } else if (match.matchStarted) {
                status = 'LIVE';
                matchStarted = true;
            }

            const teams = match.teams || [];
            const team1 = teams[0] || 'Team 1';
            const team2 = teams[1] || 'Team 2';

            const scores = match.score || [];
            const score1 = scores[0] || { r: 0, w: 0, o: 0 };
            const score2 = scores[1] || { r: 0, w: 0, o: 0 };

            return {
                id: match.id,
                name: match.name || `${team1} vs ${team2}`,
                matchType: match.matchType || 't20',
                status: match.status || status,
                venue: match.venue || '',
                date: match.date || match.dateTimeGMT,
                dateTimeGMT: match.dateTimeGMT,
                teams: [team1, team2],
                score: [
                    {
                        r: score1.r || 0,
                        w: score1.w || 0,
                        o: score1.o || 0,
                        inning: score1.inning || `${team1} Inning`
                    },
                    {
                        r: score2.r || 0,
                        w: score2.w || 0,
                        o: score2.o || 0,
                        inning: score2.inning || `${team2} Inning`
                    }
                ],
                matchStarted,
                matchEnded,
                league: match.series || '',
                stage: match.matchType || ''
            };
        });
    };

    // ==================== MOCK DATA ====================
    const getMockMatches = () => [
        {
            id: '1',
            name: 'India vs West Indies, 2nd Test',
            matchType: 'test',
            status: 'Day 1 - India elected to bat',
            venue: 'Wankhede Stadium, Mumbai',
            date: '2025-10-11',
            dateTimeGMT: '2025-10-11T04:30:00',
            teams: ['India', 'West Indies'],
            score: [
                { r: 318, w: 2, o: 90, inning: 'India Inning 1' },
                { r: 0, w: 0, o: 0, inning: 'West Indies Inning 1' }
            ],
            matchStarted: true,
            matchEnded: false,
            league: 'Test Series',
            stage: '2nd Test'
        },
        {
            id: '2',
            name: 'UAE vs Malaysia, 7th Match',
            matchType: 't20',
            status: 'United Arab Emirates won by 6 wickets',
            venue: 'Dubai International Cricket Stadium',
            date: '2025-10-10',
            teams: ['UAE', 'Malaysia'],
            score: [
                { r: 167, w: 4, o: 19.2, inning: 'UAE Inning 1' },
                { r: 161, w: 5, o: 20, inning: 'Malaysia Inning 1' }
            ],
            matchStarted: true,
            matchEnded: true,
            league: 'ICC Men\'s T20 World Cup',
            stage: 'Group Stage'
        },
        {
            id: '3',
            name: 'Namibia vs South Africa, Only T20I',
            matchType: 't20',
            status: 'Match not started',
            venue: 'Wanderers Stadium, Windhoek',
            date: '2025-10-11',
            dateTimeGMT: '2025-10-11T16:00:00',
            teams: ['Namibia', 'South Africa'],
            score: [],
            matchStarted: false,
            matchEnded: false,
            league: 'T20 International',
            stage: 'Only T20I'
        },
        {
            id: '4',
            name: 'Pakistan vs South Africa, 1st Test',
            matchType: 'test',
            status: 'Stumps - Day 1',
            venue: 'National Stadium, Karachi',
            date: '2025-10-10',
            teams: ['Pakistan', 'South Africa'],
            score: [
                { r: 245, w: 6, o: 85, inning: 'Pakistan Inning 1' },
                { r: 0, w: 0, o: 0, inning: 'South Africa Inning 1' }
            ],
            matchStarted: true,
            matchEnded: false,
            league: 'Test Series',
            stage: '1st Test'
        },
        {
            id: '5',
            name: 'Afghanistan vs Bangladesh, 2nd ODI',
            matchType: 'odi',
            status: 'Starts at 6:00 PM',
            venue: 'Sharjah Cricket Stadium',
            date: '2025-10-11',
            dateTimeGMT: '2025-10-11T13:00:00',
            teams: ['Afghanistan', 'Bangladesh'],
            score: [],
            matchStarted: false,
            matchEnded: false,
            league: 'ODI Series',
            stage: '2nd ODI'
        }
    ];

    // ==================== HELPER FUNCTIONS ====================
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const getMatchStatus = (match) => {
        if (match.matchEnded) return 'COMPLETED';
        if (match.matchStarted) return 'LIVE';
        return 'SCHEDULED';
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'LIVE': return 'live';
            case 'COMPLETED': return 'completed';
            case 'SCHEDULED': return 'scheduled';
            default: return 'default';
        }
    };

    const getMatchFormat = (type) => {
        if (!type) return 'MATCH';
        switch (type.toLowerCase()) {
            case 'test': return 'TEST';
            case 't20': return 'T20I';
            case 't20i': return 'T20I';
            case 'odi': return 'ODI';
            default: return type.toUpperCase();
        }
    };

    const getCountdown = (dateTimeGMT) => {
        if (!dateTimeGMT) return '';

        const now = new Date();
        const matchTime = new Date(dateTimeGMT);
        const diff = matchTime - now;

        if (diff <= 0) return 'Starting soon';

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (days > 0) return `in ${days}d ${hours}h`;
        if (hours > 0) return `in ${hours}h ${minutes}m`;
        return `in ${minutes}m`;
    };

    // ==================== RENDER ====================
    if (loading) {
        return (
            <div className="live-score-ticker-header">
                <div className="ticker-loading-header">
                    <i className="ri-loader-4-line spinner"></i>
                    <span>Loading matches...</span>
                </div>
            </div>
        );
    }

    if (matches.length === 0) {
        return (
            <div className="live-score-ticker-header">
                <div className="ticker-no-matches-header">
                    <i className="ri-information-line"></i>
                    <span>No matches available</span>
                </div>
            </div>
        );
    }

    return (
        <div className="live-score-ticker-header">
            {/* API Indicator with Current Source */}
            <div className="api-indicator-header">
                {currentAPI === 'rapidapi' ? '🔵 RapidAPI' : '🟢 CricAPI'}
                {error && ' (Offline Mode)'}
            </div>

            {/* Left Scroll Button */}
            <button
                className="ticker-scroll-btn-header left"
                onClick={() => scroll('left')}
                aria-label="Scroll left"
            >
                <i className="ri-arrow-left-s-line"></i>
            </button>

            {/* Scrollable Container */}
            <div className="ticker-scroll-container-header" ref={scrollRef}>
                <div className="ticker-matches-header">
                    {matches.map((match) => {
                        const status = getMatchStatus(match);
                        const statusColor = getStatusColor(status);

                        return (
                            <div
                                key={match.id}
                                className={`match-card-header ${statusColor}`}
                            >
                                {/* Match Header */}
                                <div className="match-header-header">
                                    <span className={`match-status-header ${statusColor}`}>
                                        {status === 'LIVE' && <span className="live-dot">🔴</span>}
                                        {status}
                                    </span>
                                    <span className="match-format-header">{getMatchFormat(match.matchType)}</span>
                                </div>

                                {/* League Info */}
                                {match.league && (
                                    <div className="match-league-header">
                                        {match.league}
                                        {match.stage && ` • ${match.stage}`}
                                    </div>
                                )}

                                {/* Teams & Scores */}
                                <div className="match-teams-header">
                                    {match.teams && match.teams.length >= 2 && (
                                        <>
                                            <div className="team-header">
                                                <span className="team-name-header">{match.teams[0]}</span>
                                                {match.score && match.score[0] && match.score[0].r > 0 && (
                                                    <span className="team-score-header">
                                                        {match.score[0].r}/{match.score[0].w}
                                                        {match.score[0].o > 0 && ` (${match.score[0].o})`}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="team-header">
                                                <span className="team-name-header">{match.teams[1]}</span>
                                                {match.score && match.score[1] && match.score[1].r > 0 && (
                                                    <span className="team-score-header">
                                                        {match.score[1].r}/{match.score[1].w}
                                                        {match.score[1].o > 0 && ` (${match.score[1].o})`}
                                                    </span>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Match Info */}
                                <div className="match-info-header">
                                    {status === 'LIVE' && (
                                        <span className="match-detail-header">{match.status}</span>
                                    )}
                                    {status === 'COMPLETED' && (
                                        <span className="match-result-header">{match.status}</span>
                                    )}
                                    {status === 'SCHEDULED' && (
                                        <span className="match-countdown-header">
                                            <i className="ri-time-line"></i> Starts {getCountdown(match.dateTimeGMT)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Right Scroll Button */}
            <button
                className="ticker-scroll-btn-header right"
                onClick={() => scroll('right')}
                aria-label="Scroll right"
            >
                <i className="ri-arrow-right-s-line"></i>
            </button>
        </div>
    );
}

export default LiveScoreTicker;


/* ==================== COMMENTED CODE ARCHIVE ====================
 * Previous CricAPI and Sportmonks implementations kept for reference
 * 
 * // CricAPI Fetch (Old Implementation)
 * const fetchFromCricAPI = async () => { ... }
 * 
 * // Sportmonks Fetch (Old Implementation)  
 * const fetchFromSportmonks = async () => { ... }
 * 
 * // Format Sportmonks Data
 * const formatSportmonksData = (data) => { ... }
 * 
 * ======================================================= */