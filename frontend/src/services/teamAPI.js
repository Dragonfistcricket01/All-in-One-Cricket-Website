const API_URL = 'http://localhost:5000/api/teams'; // Update with your backend URL

export const teamAPI = {
    // Get all teams for a user
    getUserTeams: async (userId) => {
        try {
            const response = await fetch(`${API_URL}/user/${userId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching teams:', error);
            throw error;
        }
    },

    // Get single team
    getTeam: async (teamId) => {
        try {
            const response = await fetch(`${API_URL}/${teamId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching team:', error);
            throw error;
        }
    },

    // Create team
    createTeam: async (userId, teamName, formationId, formationName, players) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    teamName,
                    formationId,
                    formationName,
                    players
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error creating team:', error);
            throw error;
        }
    },

    // Update team
    updateTeam: async (teamId, teamName, formationId, formationName, players) => {
        try {
            const response = await fetch(`${API_URL}/${teamId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    teamName,
                    formationId,
                    formationName,
                    players
                })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error updating team:', error);
            throw error;
        }
    },

    // Delete team
    deleteTeam: async (teamId) => {
        try {
            const response = await fetch(`${API_URL}/${teamId}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error deleting team:', error);
            throw error;
        }
    },

    // Get user stats
    getUserStats: async (userId) => {
        try {
            const response = await fetch(`${API_URL}/user/${userId}/stats`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching stats:', error);
            throw error;
        }
    }
};