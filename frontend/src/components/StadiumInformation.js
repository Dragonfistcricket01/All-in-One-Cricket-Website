import React, { useState } from 'react';

const StadiumInformation = () => {
    const [selectedStadium, setSelectedStadium] = useState(null);

    const stadiums = [
        {
            name: 'Shere Bangla National Stadium',
            location: 'Mirpur, Dhaka, Bangladesh',
            capacity: '26,000',
            opened: '2006',
            icon: '🏟️',
            description: 'The premier cricket venue in Bangladesh, located in Mirpur. Home ground for the Bangladesh national cricket team and hosts major international matches.',
            image: '/resource/Flag_of_Bangladesh.png',
            facts: [
                'Hosted the 2011 Cricket World Cup matches',
                'Venue for Bangladesh\'s first Test victory',
                'Home of Dhaka Gladiators in BPL',
                'Features state-of-the-art facilities'
            ]
        },
        {
            name: 'Zahur Ahmed Chowdhury Stadium',
            location: 'Chittagong, Bangladesh',
            capacity: '22,000',
            opened: '2006',
            icon: '🏟️',
            description: 'Bangladesh\'s second-largest cricket stadium, known for its picturesque setting and hosting important international fixtures.',
            image: '/resource/Flag_of_Bangladesh.png',
            facts: [
                'Named after former cricket administrator',
                'Hosted 2014 ICC World T20 matches',
                'Known for batting-friendly pitches',
                'Regular venue for Test and ODI matches'
            ]
        },
        {
            name: 'Sylhet International Cricket Stadium',
            location: 'Sylhet, Bangladesh',
            capacity: '18,500',
            opened: '2007',
            icon: '🏟️',
            description: 'A modern cricket stadium in the tea capital of Bangladesh, offering a unique atmosphere for cricket matches.',
            image: '/resource/Flag_of_Bangladesh.png',
            facts: [
                'Surrounded by tea gardens',
                'Hosted 2014 ICC World T20 matches',
                'One of the most scenic cricket grounds',
                'Home ground for Sylhet Royals in BPL'
            ]
        },
        {
            name: 'Melbourne Cricket Ground (MCG)',
            location: 'Melbourne, Australia',
            capacity: '100,024',
            opened: '1854',
            icon: '🏟️',
            description: 'The largest cricket stadium in the world, known as "The G". It has hosted numerous historic matches including the 1992 and 2015 Cricket World Cup finals.',
            image: '/resource/Flag_of_Australia.png',
            facts: [
                'Hosts the Boxing Day Test match annually',
                'Has the largest capacity of any cricket ground',
                'Hosted the first-ever Test match in 1877',
                'Features state-of-the-art facilities and museum'
            ]
        },
        {
            name: 'Lord\'s Cricket Ground',
            location: 'London, England',
            capacity: '31,100',
            opened: '1814',
            icon: '🏟️',
            description: 'Known as the "Home of Cricket", Lord\'s is the most prestigious cricket venue in the world and headquarters of the MCC.',
            image: '/resource/Flag_of_England.png',
            facts: [
                'Home of the Marylebone Cricket Club (MCC)',
                'Houses the famous Lord\'s Honours Boards',
                'Features the iconic Media Centre',
                'Hosts major finals and prestigious matches'
            ]
        },
        {
            name: 'Sydney Cricket Ground (SCG)',
            location: 'Sydney, Australia',
            capacity: '48,000',
            opened: '1848',
            icon: '🏟️',
            description: 'One of the oldest cricket grounds still in use, the SCG is known for its beautiful setting and rich cricket history.',
            image: '/resource/Flag_of_Australia.png',
            facts: [
                'Hosts the New Year Test match annually',
                'One of the oldest cricket venues in the world',
                'Features historic Members\' and Ladies\' Pavilions',
                'Regular venue for Big Bash League matches'
            ]
        },
        {
            name: 'The Oval',
            location: 'London, England',
            capacity: '27,500',
            opened: '1845',
            icon: '🏟️',
            description: 'Home to Surrey County Cricket Club, The Oval is famous for hosting the final Test of the English summer.',
            image: '/resource/Flag_of_England.png',
            facts: [
                'Traditionally hosts the last Test of English summer',
                'Iconic gasholders visible in background',
                'Hosted the 2017 and 2019 Cricket World Cup finals',
                'Features modern OCS Stand'
            ]
        },
        {
            name: 'Newlands Cricket Ground',
            location: 'Cape Town, South Africa',
            capacity: '25,000',
            opened: '1888',
            icon: '🏟️',
            description: 'One of the most scenic cricket grounds in the world, with Table Mountain providing a stunning backdrop.',
            image: '/resource/south-africa.jpg',
            facts: [
                'Most beautiful cricket ground setting',
                'Table Mountain backdrop',
                'Hosts New Year Test matches',
                'Known for challenging pitch conditions'
            ]
        },
        {
            name: 'Gaddafi Stadium',
            location: 'Lahore, Pakistan',
            capacity: '27,000',
            opened: '1959',
            icon: '🏟️',
            description: 'Pakistan\'s premier cricket venue, known for hosting major international matches and having a passionate home crowd.',
            image: '/resource/Pakistani-Flag.jpg',
            facts: [
                'Hosted the 1996 World Cup final',
                'Site of the 2009 attack on Sri Lankan team',
                'Recently renovated with modern facilities',
                'Hosts Pakistan Super League matches'
            ]
        }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                        🏟️ Cricket Stadium Information
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        Explore cricket venues around the world.
                    </p>
                </div>

                {/* Stadiums Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {stadiums.map((stadium, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedStadium(selectedStadium === index ? null : index)}
                            style={{
                                background: 'var(--card-bg)',
                                borderRadius: '15px',
                                padding: '2rem',
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                border: selectedStadium === index ? '2px solid #ff7800' : '2px solid transparent',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                if (selectedStadium !== index) {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedStadium !== index) {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                                }
                            }}
                        >
                            {/* Header Section */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{
                                    fontSize: '3rem',
                                    width: '70px',
                                    height: '70px',
                                    background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src={stadium.image}
                                        alt={stadium.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '12px'
                                        }}
                                        onError={(e) => {
                                            e.target.src = '/resource/default.png'; // optional fallback
                                        }}
                                    />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{
                                        fontSize: '1.3rem',
                                        marginBottom: '0.3rem',
                                        color: 'var(--text-primary)',
                                        fontWeight: '700'
                                    }}>
                                        {stadium.name}
                                    </h3>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        margin: 0
                                    }}>
                                        📍 {stadium.location}
                                    </p>
                                </div>
                            </div>

                            {/* Stats */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                                marginBottom: '1rem',
                                padding: '1rem',
                                background: 'rgba(255, 120, 0, 0.05)',
                                borderRadius: '10px'
                            }}>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                                        Capacity
                                    </div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ff7800' }}>
                                        {stadium.capacity}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                                        Opened
                                    </div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ff7800' }}>
                                        {stadium.opened}
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p style={{
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                color: 'var(--text-secondary)',
                                marginBottom: '1rem'
                            }}>
                                {stadium.description}
                            </p>

                            {/* Expandable Facts */}
                            {selectedStadium === index && (
                                <div style={{
                                    marginTop: '1.5rem',
                                    padding: '1rem',
                                    background: 'rgba(255, 120, 0, 0.05)',
                                    borderRadius: '10px',
                                    borderLeft: '3px solid #ff7800',
                                    animation: 'slideDown 0.3s ease'
                                }}>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        marginBottom: '0.8rem',
                                        color: 'var(--text-primary)',
                                        fontWeight: '700'
                                    }}>
                                        ⚡ Quick Facts:
                                    </h4>
                                    <ul style={{
                                        margin: 0,
                                        paddingLeft: '1.2rem',
                                        listStyle: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem'
                                    }}>
                                        {stadium.facts.map((fact, factIndex) => (
                                            <li key={factIndex} style={{
                                                fontSize: '0.9rem',
                                                color: 'var(--text-secondary)',
                                                position: 'relative',
                                                paddingLeft: '1rem'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    color: '#ff7800',
                                                    fontWeight: 'bold'
                                                }}>
                                                    •
                                                </span>
                                                {fact}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Click to expand indicator */}
                            <div style={{
                                textAlign: 'center',
                                marginTop: '1rem',
                                fontSize: '0.85rem',
                                color: '#ff7800',
                                fontWeight: '600'
                            }}>
                                {selectedStadium === index ? '▲ Click to collapse' : '▼ Click for more details'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div style={{
                    background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                    padding: '2rem',
                    borderRadius: '15px',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>
                        🌍 Cricket Around the World
                    </h3>
                    <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.95 }}>
                        These iconic stadiums have witnessed countless historic moments in cricket. From the roaring crowds
                        at Shere-e-Bangla Mirpur to the scenic beauty of Newlands, each venue has its own unique character and contributes
                        to the rich tapestry of cricket history.
                    </p>
                </div>
            </div>

            {/* Animation */}
            <style>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default StadiumInformation;