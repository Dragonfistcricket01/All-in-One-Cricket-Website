import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminSyncLogs.css';

function AdminSyncLogs() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        total: 0,
        success: 0,
        failed: 0
    });

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/api/sync/logs');
            const fetchedLogs = response.data.logs || [];
            setLogs(fetchedLogs);

            // Calculate stats
            const total = fetchedLogs.length;
            const success = fetchedLogs.filter(log => log.status === 'success').length;
            const failed = fetchedLogs.filter(log => log.status === 'failed').length;
            setStats({ total, success, failed });

            setLoading(false);
        } catch (error) {
            console.error('Error fetching logs:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="admin-sync-logs-container">
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p className="loading-text">Loading sync logs...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-sync-logs-container">
            <div className="sync-logs-header">
                <h1 className="sync-logs-title">
                    <i className="ri-database-line"></i>
                    Sync Logs
                </h1>
                <button onClick={fetchLogs} className="refresh-btn">
                    <i className="ri-refresh-line"></i>
                    Refresh Logs
                </button>
            </div>

            {/* Stats Cards */}
            <div className="sync-stats">
                <div className="stat-card">
                    <div className="stat-icon total">
                        <i className="ri-file-list-line"></i>
                    </div>
                    <div className="stat-details">
                        <h3>Total Syncs</h3>
                        <p>{stats.total}</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon success">
                        <i className="ri-checkbox-circle-line"></i>
                    </div>
                    <div className="stat-details">
                        <h3>Successful</h3>
                        <p>{stats.success}</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon failed">
                        <i className="ri-close-circle-line"></i>
                    </div>
                    <div className="stat-details">
                        <h3>Failed</h3>
                        <p>{stats.failed}</p>
                    </div>
                </div>
            </div>

            {/* Logs Table */}
            <div className="logs-table-container">
                {logs.length === 0 ? (
                    <div className="no-logs">
                        <i className="ri-inbox-line"></i>
                        <p>No sync logs yet</p>
                        <p style={{ fontSize: '14px' }}>Run a data sync operation to see logs here</p>
                    </div>
                ) : (
                    <table className="logs-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Message</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map(log => (
                                <tr key={log.id}>
                                    <td className="log-id">#{log.id}</td>
                                    <td>
                                        <span className="log-type">{log.sync_type}</span>
                                    </td>
                                    <td>
                                        <span className={`log-status ${log.status}`}>
                                            {log.status === 'success' ? '✅' : '❌'}
                                            {log.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="log-message">{log.message}</td>
                                    <td className="log-time">
                                        {new Date(log.synced_at).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default AdminSyncLogs;