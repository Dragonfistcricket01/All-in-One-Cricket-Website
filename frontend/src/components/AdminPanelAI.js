//          Open browser console and run this code
//     fetch('http://localhost:5000/api/sync/all', { method: 'POST' })
//    .then(res => res.json())
//    .then(data => console.log(data));
//------------------------------------------------------------------------


import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
    const [syncing, setSyncing] = useState(false);
    const [logs, setLogs] = useState([]);
    const [message, setMessage] = useState('');

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    // Trigger sync
    const handleSync = async (syncType) => {
        setSyncing(true);
        setMessage('');

        try {
            const response = await axios.post(`${API_URL}/api/sync/${syncType}`);
            setMessage(`✅ ${response.data.message}`);
            fetchLogs(); // Refresh logs
        } catch (error) {
            setMessage(`❌ Sync failed: ${error.response?.data?.error || error.message}`);
        } finally {
            setSyncing(false);
        }
    };

    // Fetch sync logs
    const fetchLogs = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/sync/logs`);
            setLogs(response.data.logs);
        } catch (error) {
            console.error('Failed to fetch logs:', error);
        }
    };

    return (
        <div className="admin-panel">
            <h1>🔧 Admin Control Panel</h1>

            <div className="sync-buttons">
                <button onClick={() => handleSync('all')} disabled={syncing}>
                    {syncing ? '⏳ Syncing...' : '🔄 Sync All Data'}
                </button>
                <button onClick={() => handleSync('team-rankings')} disabled={syncing}>
                    📊 Sync Team Rankings
                </button>
                <button onClick={() => handleSync('live-matches')} disabled={syncing}>
                    🏏 Sync Live Matches
                </button>
                <button onClick={() => handleSync('news')} disabled={syncing}>
                    📰 Sync Cricket News
                </button>
            </div>

            {message && <div className="sync-message">{message}</div>}

            <div className="logs-section">
                <h2>📋 Recent Sync Logs</h2>
                <button onClick={fetchLogs}>🔄 Refresh Logs</button>

                <table className="logs-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Records</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => (
                            <tr key={index}>
                                <td>{log.sync_type}</td>
                                <td className={log.status === 'success' ? 'success' : 'error'}>
                                    {log.status}
                                </td>
                                <td>{log.records_synced}</td>
                                <td>{new Date(log.synced_at).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;