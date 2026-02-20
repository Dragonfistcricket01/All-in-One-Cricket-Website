import React from 'react';

const Settings = ({ user }) => {
    return (
        <div style={{
            minHeight: '100vh',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                }}>
                    <i className="ri-settings-3-line" style={{ color: '#ff6300' }}></i>
                    Account Settings
                </h1>
                <p style={{
                    fontSize: '1.1rem',
                    opacity: 0.7
                }}>
                    Manage your account preferences
                </p>
            </div>

            {/* Compact Cards Container */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                maxWidth: '1200px',
                width: '100%'
            }}>
                {/* Profile Information Card */}
                <div style={{
                    background: 'var(--card-bg, white)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '250px'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    }}
                >
                    <i className="ri-user-3-fill" style={{
                        fontSize: '4rem',
                        color: '#ff6300',
                        marginBottom: '1rem'
                    }}></i>
                    <h3 style={{
                        fontSize: '1.3rem',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}>
                        Profile Information
                    </h3>
                    <div style={{
                        textAlign: 'left',
                        width: '100%',
                        fontSize: '0.95rem',
                        lineHeight: '1.8'
                    }}>
                        <p><strong>Username:</strong> {user?.username || 'Not available'}</p>
                        <p><strong>Email:</strong> {user?.email || 'Not available'}</p>
                    </div>
                </div>

                {/* Preferences Card */}
                <div style={{
                    background: 'var(--card-bg, white)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '250px'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    }}
                >
                    <i className="ri-settings-3-fill" style={{
                        fontSize: '4rem',
                        color: '#ff6300',
                        marginBottom: '1rem'
                    }}></i>
                    <h3 style={{
                        fontSize: '1.3rem',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}>
                        Preferences
                    </h3>
                    <p style={{
                        fontSize: '0.95rem',
                        opacity: 0.7,
                        lineHeight: '1.6'
                    }}>
                        Coming Soon!<br />
                        Customize your experience with notification settings, language preferences, and more.
                    </p>
                </div>

                {/* Security Card */}
                <div style={{
                    background: 'var(--card-bg, white)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '250px'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                    }}
                >
                    <i className="ri-lock-password-fill" style={{
                        fontSize: '4rem',
                        color: '#ff6300',
                        marginBottom: '1rem'
                    }}></i>
                    <h3 style={{
                        fontSize: '1.3rem',
                        marginBottom: '1rem',
                        fontWeight: '600'
                    }}>
                        Security
                    </h3>
                    <p style={{
                        fontSize: '0.95rem',
                        opacity: 0.7,
                        lineHeight: '1.6'
                    }}>
                        Coming Soon!<br />
                        Change your password and manage security settings to keep your account safe.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Settings;