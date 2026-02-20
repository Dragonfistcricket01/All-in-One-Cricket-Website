import mockPlayers from '../data/mockPlayers';
import mockRankings from '../data/mockRankings';
import teamRankingsData from '../data/mockTeamRankings.json';

// Toggle between API and Mock Data
const USE_MOCK_DATA = true; // Set to false when you have real API

// API Configuration
const API_KEY = process.env.CRICAPI_KEY;
const BASE_URL = 'https://api.cricapi.com/v1';
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;

// ==================== PLAYER PROFILES ====================

/**
 * Get all players
 */
export const getAllPlayers = async () => {
    try {
        if (USE_MOCK_DATA) {
            return mockPlayers.players;
        }

        // Real API call (when available)
        // const response = await fetch(`${BASE_URL}/players?apikey=${API_KEY}`);
        // const data = await response.json();
        // return data.data;

        return mockPlayers.players;
    } catch (error) {
        console.error('Error fetching players:', error);
        return mockPlayers.players; // Fallback to mock data
    }
};

/**
 * Get player by ID
 */
export const getPlayerById = async (playerId) => {
    try {
        if (USE_MOCK_DATA) {
            return mockPlayers.players.find(player => player.id === playerId);
        }

        // Real API call (when available)
        // const response = await fetch(`${BASE_URL}/players/${playerId}?apikey=${API_KEY}`);
        // const data = await response.json();
        // return data.data;

        return mockPlayers.players.find(player => player.id === playerId);
    } catch (error) {
        console.error('Error fetching player:', error);
        return mockPlayers.players.find(player => player.id === playerId);
    }
};

/**
 * Search players by name
 */
export const searchPlayers = async (searchTerm) => {
    try {
        const players = await getAllPlayers();
        return players.filter(player =>
            player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            player.country.toLowerCase().includes(searchTerm.toLowerCase())
        );
    } catch (error) {
        console.error('Error searching players:', error);
        return [];
    }
};

/**
 * Filter players by country
 */
export const filterPlayersByCountry = async (country) => {
    try {
        const players = await getAllPlayers();
        return players.filter(player =>
            player.country.toLowerCase() === country.toLowerCase()
        );
    } catch (error) {
        console.error('Error filtering players:', error);
        return [];
    }
};

/**
 * Filter players by role
 */
export const filterPlayersByRole = async (role) => {
    try {
        const players = await getAllPlayers();
        return players.filter(player =>
            player.role.toLowerCase() === role.toLowerCase()
        );
    } catch (error) {
        console.error('Error filtering players:', error);
        return [];
    }
};

// ==================== PLAYER RANKINGS ====================

/**
 * Get rankings by format and type
 */
export const getRankings = async (format, type) => {
    try {
        if (USE_MOCK_DATA) {
            const key = `${format}${type.charAt(0).toUpperCase() + type.slice(1)}`;
            return mockRankings[key] || [];
        }

        // Real API call (when available)
        // const response = await fetch(`${BASE_URL}/rankings/${format}/${type}?apikey=${API_KEY}`);
        // const data = await response.json();
        // return data.data;

        const key = `${format}${type.charAt(0).toUpperCase() + type.slice(1)}`;
        return mockRankings[key] || [];
    } catch (error) {
        console.error('Error fetching rankings:', error);
        const key = `${format}${type.charAt(0).toUpperCase() + type.slice(1)}`;
        return mockRankings[key] || [];
    }
};

/**
 * Get trending players (players with biggest rank improvements)
 */
export const getTrendingPlayers = async (format, type) => {
    try {
        const rankings = await getRankings(format, type);

        // Calculate rank change and sort by biggest improvement
        const trending = rankings
            .map(player => ({
                ...player,
                rankChange: player.previousRank - player.rank,
                ratingChange: player.rating - player.previousRating
            }))
            .filter(player => player.rankChange > 0) // Only improvements
            .sort((a, b) => b.rankChange - a.rankChange)
            .slice(0, 5); // Top 5

        return trending;
    } catch (error) {
        console.error('Error fetching trending players:', error);
        return [];
    }
};

/**
 * Filter rankings by country
 */
export const filterRankingsByCountry = async (format, type, country) => {
    try {
        const rankings = await getRankings(format, type);
        if (country === 'all') return rankings;

        return rankings.filter(player =>
            player.country.toLowerCase() === country.toLowerCase()
        );
    } catch (error) {
        console.error('Error filtering rankings:', error);
        return [];
    }
};

// ==================== TEAM RANKINGS ====================

/**
 * Get team rankings by format
 */
export const getTeamRankings = async (format) => {
    try {
        if (USE_MOCK_DATA) {
            const key = format === 'wtc' ? 'wtcStandings' : `${format}Rankings`;
            return teamRankingsData[key] || [];
        }

        // Real API call (when available)
        // const response = await fetch(`${BASE_URL}/team-rankings/${format}?apikey=${API_KEY}`);
        // const data = await response.json();
        // return data.data;

        const key = format === 'wtc' ? 'wtcStandings' : `${format}Rankings`;
        return teamRankingsData[key] || [];
    } catch (error) {
        console.error('Error fetching team rankings:', error);
        const key = format === 'wtc' ? 'wtcStandings' : `${format}Rankings`;
        return teamRankingsData[key] || [];
    }
};

/**
 * Get top movers (teams with biggest rank improvements)
 */
export const getTopMovers = async (format) => {
    try {
        if (format === 'wtc') return []; // WTC doesn't have previous ranks

        const rankings = await getTeamRankings(format);

        const movers = rankings
            .map(team => ({
                ...team,
                rankChange: team.previousRank - team.rank
            }))
            .filter(team => team.rankChange > 0)
            .sort((a, b) => b.rankChange - a.rankChange)
            .slice(0, 3);

        return movers;
    } catch (error) {
        console.error('Error fetching top movers:', error);
        return [];
    }
};