import React, { useState, useEffect } from 'react';
import { getTeamStats } from '../../../services/teamStatsAPI';
import TeamSelector from './components/TeamSelector';
import OverviewTab from './components/OverviewTab';
import PerformanceTab from './components/PerformanceTab';
import HeadToHeadTab from './components/HeadToHeadTab';
import VenueAnalysisTab from './components/VenueAnalysisTab';
import RecentMatches from './components/RecentMatches';
import RecordsSection from './components/RecordsSection';
import SquadSection from './components/SquadSection';
import ComparisonTool from './components/ComparisonTool';
import './TeamStatistics.css';

const TeamStatistics = () => {
    const [selectedTeam, setSelectedTeam] = useState('BAN');
    const [selectedFormat, setSelectedFormat] = useState('test');
    const [filters, setFilters] = useState({
        timePeriod: 'alltime',
        venueType: 'all'
    });
    const [activeTab, setActiveTab] = useState('overview');
    const [teamData, setTeamData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTeamData();
    }, [selectedTeam, filters.timePeriod]);

    const fetchTeamData = async () => {
        setLoading(true);
        try {
            const data = await getTeamStats(selectedTeam, 'all', filters.timePeriod);
            setTeamData(data);
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
        setLoading(false);
    };

    const tabs = [
        { id: 'overview', name: 'Overview', icon: 'ri-dashboard-line' },
        { id: 'performance', name: 'Performance', icon: 'ri-bar-chart-2-line' },
        { id: 'head-to-head', name: 'Head to Head', icon: 'ri-sword-line' },
        { id: 'venues', name: 'Venue Analysis', icon: 'ri-map-pin-line' },
        { id: 'records', name: 'Records', icon: 'ri-award-line' },
        { id: 'squad', name: 'Squad', icon: 'ri-team-line' },
        { id: 'comparison', name: 'Compare Teams', icon: 'ri-split-cells-horizontal' }
    ];

    if (loading) {
        return (
            <div className="team-statistics-page">
                <div className="loading-container">
                    <i className="ri-loader-4-line spinner"></i>
                    <p>Loading team statistics...</p>
                </div>
            </div>
        );
    }

    if (!teamData) {
        return (
            <div className="team-statistics-page">
                <div className="no-data-message">
                    <i className="ri-information-line"></i>
                    <p>No team data available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="team-statistics-page">
            {/* Hero Section */}
            <div className="stats-hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>
                            <i className="ri-bar-chart-box-line"></i>
                            Team Statistics
                        </h1>
                        <p>Comprehensive team performance analysis and records</p>
                    </div>
                </div>
            </div>

            {/* Team Selector */}
            <TeamSelector
                selectedTeam={selectedTeam}
                onTeamChange={setSelectedTeam}
                selectedFormat={selectedFormat}
                onFormatChange={setSelectedFormat}
                filters={filters}
                onFiltersChange={setFilters}
            />

            {/* Stats Overview Cards */}
            {teamData[selectedFormat] && (
                <div className="stats-overview-cards">
                    <div className="overview-card">
                        <div className="overview-icon">
                            <i className="ri-trophy-line"></i>
                        </div>
                        <div className="overview-content">
                            <h3>{teamData[selectedFormat].overview.totalMatches}</h3>
                            <p>Total Matches</p>
                        </div>
                    </div>
                    <div className="overview-card">
                        <div className="overview-icon wins">
                            <i className="ri-checkbox-circle-line"></i>
                        </div>
                        <div className="overview-content">
                            <h3>{teamData[selectedFormat].overview.won}</h3>
                            <p>Wins</p>
                        </div>
                    </div>
                    <div className="overview-card">
                        <div className="overview-icon percentage">
                            <i className="ri-percent-line"></i>
                        </div>
                        <div className="overview-content">
                            <h3>{teamData[selectedFormat].overview.winPercentage}%</h3>
                            <p>Win Rate</p>
                        </div>
                    </div>
                    <div className="overview-card">
                        <div className="overview-icon streak">
                            <i className="ri-fire-line"></i>
                        </div>
                        <div className="overview-content">
                            <h3>{teamData[selectedFormat].overview.currentStreak.count}</h3>
                            <p>Current Streak</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Tabs Navigation */}
            <div className="stats-tabs-nav">
                <div className="tabs-container">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <i className={tab.icon}></i>
                            <span>{tab.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="stats-content">
                {activeTab === 'overview' && (
                    <>
                        <OverviewTab stats={teamData} format={selectedFormat} />
                        <RecentMatches matches={teamData.recentMatches} currentTeam={selectedTeam} />
                    </>
                )}

                {activeTab === 'performance' && (
                    <PerformanceTab stats={teamData} format={selectedFormat} />
                )}

                {activeTab === 'head-to-head' && (
                    <HeadToHeadTab currentTeam={selectedTeam} currentFormat={selectedFormat} />
                )}

                {activeTab === 'venues' && (
                    <VenueAnalysisTab currentTeam={selectedTeam} />
                )}

                {activeTab === 'records' && (
                    <RecordsSection stats={teamData} format={selectedFormat} />
                )}

                {activeTab === 'squad' && (
                    <SquadSection stats={teamData} />
                )}

                {activeTab === 'comparison' && (
                    <ComparisonTool currentFormat={selectedFormat} />
                )}
            </div>
        </div>
    );
};

export default TeamStatistics;