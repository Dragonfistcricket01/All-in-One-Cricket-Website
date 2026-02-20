import React from 'react';

const Careers = () => {
    const openPositions = [
        {
            title: 'Senior Full Stack Developer',
            department: 'Engineering',
            location: 'Dhaka, Bangladesh / Remote',
            type: 'Full-time',
            icon: 'ri-code-s-slash-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            title: 'Cricket Content Writer',
            department: 'Content',
            location: 'Remote',
            type: 'Full-time',
            icon: 'ri-quill-pen-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Dhaka, Bangladesh / Remote',
            type: 'Full-time',
            icon: 'ri-pantone-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            title: 'Data Analyst',
            department: 'Data Science',
            location: 'Remote',
            type: 'Full-time',
            icon: 'ri-line-chart-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            title: 'Community Manager',
            department: 'Marketing',
            location: 'Remote',
            type: 'Part-time',
            icon: 'ri-discuss-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        },
        {
            title: 'DevOps Engineer',
            department: 'Engineering',
            location: 'Dhaka, Bangladesh',
            type: 'Full-time',
            icon: 'ri-server-line',
            color: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
        }
    ];

    const benefits = [
        { icon: 'ri-money-dollar-circle-line', title: 'Competitive Salary', description: 'Market-leading compensation package' },
        { icon: 'ri-home-office-line', title: 'Remote Work', description: 'Work from anywhere in the world' },
        { icon: 'ri-mental-health-line', title: 'Health Insurance', description: 'Comprehensive health coverage' },
        { icon: 'ri-calendar-check-line', title: 'Flexible Hours', description: 'Choose your working hours' },
        { icon: 'ri-graduation-cap-line', title: 'Learning Budget', description: 'Annual budget for courses & conferences' },
        { icon: 'ri-team-line', title: 'Great Team', description: 'Work with passionate cricket enthusiasts' }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <i className="ri-briefcase-line" style={{ color: '#ff7800' }}></i>
                        Careers at All-in-One Cricket
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        Join our team and help us build the ultimate cricket platform
                    </p>
                </div>

                {/* Why Join Us */}
                <div style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', marginBottom: '3rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Why Join Us?</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        At All-in-One Cricket, I am passionate about cricket and technology. I believe in creating
                        an environment where talented individuals can thrive, innovate, and make a real impact on
                        millions of cricket fans worldwide.
                    </p>
                </div>

                {/* Benefits */}
                <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>Benefits & Perks</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'var(--card-bg)',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                textAlign: 'center',
                                border: '1px solid rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <i className={benefit.icon} style={{ fontSize: '2.5rem', color: '#ff7800', marginBottom: '1rem' }}></i>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>{benefit.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Open Positions */}
                <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>Open Positions</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                    {openPositions.map((position, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'var(--card-bg)',
                                padding: '2rem',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '2rem',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateX(5px)';
                                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    background: position.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    color: 'white',
                                    flexShrink: 0
                                }}>
                                    <i className={position.icon}></i>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                                        {position.title}
                                    </h3>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                        <span><i className="ri-building-line"></i> {position.department}</span>
                                        <span><i className="ri-map-pin-line"></i> {position.location}</span>
                                        <span><i className="ri-time-line"></i> {position.type}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    background: position.color,
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    flexShrink: 0
                                }}
                                onClick={() => alert('Application system coming soon!')}
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div style={{
                    background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                    padding: '3rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Don't See the Right Role?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95 }}>
                        We're always interested in meeting talented people. Send us your resume!
                    </p>
                    <a
                        href="/contact"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            background: 'white',
                            color: '#ff7800',
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
                        <i className="ri-mail-send-line" style={{ marginRight: '0.5rem' }}></i>
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Careers;