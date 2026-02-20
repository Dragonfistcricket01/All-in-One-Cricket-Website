const cron = require('node-cron');
const { syncAllData } = require('../services/syncService');
const db = require('../config/database');

// Run sync every hour
const startSyncCron = () => {
    console.log('⏰ Cron job started: Syncing data every hour');

    // Run at minute 0 of every hour
    cron.schedule('0 * * * *', async () => {
        console.log('⏰ Cron triggered: Starting data sync...');
        try {
            await syncAllData();
            console.log('✅ Scheduled sync completed');
        } catch (error) {
            console.error('❌ Scheduled sync failed:', error);
        }
    });

    // Optional: Run live matches sync every 5 minutes
    cron.schedule('*/5 * * * *', async () => {
        console.log('⏰ Quick sync: Live matches');
        try {
            const { syncLiveMatches } = require('../services/syncService');
            await syncLiveMatches();
        } catch (error) {
            console.error('❌ Live matches sync failed:', error);
        }
    });
};

module.exports = { startSyncCron };