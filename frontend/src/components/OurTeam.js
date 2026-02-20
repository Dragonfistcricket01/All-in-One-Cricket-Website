import React from 'react';

const OurTeam = () => {
    const teamMembers = [
        {
            name: 'Abdullah Ibrahim',
            role: 'Founder & CEO',
            bio: 'Cricket enthusiast with 10+ years of cricket experience.',
            icon: 'ri-user-star-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            name: 'Development Team',
            role: 'Full Stack Developer',
            bio: 'Skilled developer bringing the platform to life with cutting-edge technology.',
            icon: 'ri-code-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            name: 'Content Team',
            role: 'Content Creator',
            bio: 'Passionate cricket fan delivering the latest news and analysis.',
            icon: 'ri-article-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            name: 'Design Team',
            role: 'UI/UX Designer',
            bio: 'Creating beautiful and intuitive user experiences for cricket fans.',
            icon: 'ri-palette-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            name: 'Data Team',
            role: 'Data Analyst',
            bio: 'Ensuring accurate statistics and real-time data for all cricket matches.',
            icon: 'ri-database-2-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            name: 'Support Team',
            role: 'Customer Support',
            bio: 'Dedicated to providing excellent support and answering your questions.',
            icon: 'ri-customer-service-2-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <i className="ri-team-line" style={{ color: '#ff6300' }}></i>
                        Our Team
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        Meet the passionate people behind All-in-One Cricket
                    </p>
                </div>

                {/* Team Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                border: '1px solid rgba(0, 0, 0, 0.1)'
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
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: member.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                fontSize: '2.5rem',
                                color: 'white'
                            }}>
                                <i className={member.icon}></i>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                                {member.name}
                            </h3>
                            <p style={{ color: member.color, fontWeight: '600', marginBottom: '1rem', fontSize: '0.95rem' }}>
                                {member.role}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Join Us Section */}
                <div style={{
                    background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                    padding: '3rem',
                    borderRadius: '12px',
                    marginTop: '4rem',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Want to Join Our Team?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
                        We're always looking for talented individuals who share our passion for cricket!
                    </p>
                    <a
                        href="/careers"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            background: 'white',
                            color: '#ff6300',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        View Open Positions
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;