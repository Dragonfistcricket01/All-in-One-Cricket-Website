import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CricketClubs = () => {
    const [clubs, setClubs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userLocation, setUserLocation] = useState(null);
    const [searchLocation, setSearchLocation] = useState('');
    const [selectedClub, setSelectedClub] = useState(null);
    const [sortBy, setSortBy] = useState('distance'); // 'distance' or 'name'

    useEffect(() => {
        getUserLocation();
    }, []);

    const getUserLocation = () => {
        setLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setUserLocation(location);
                    fetchNearbyClubs(location);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    // Default to Dhaka if location not available
                    const defaultLocation = { lat: 23.8103, lng: 90.4125 };
                    setUserLocation(defaultLocation);
                    fetchNearbyClubs(defaultLocation);
                }
            );
        } else {
            // Fallback to default location
            const defaultLocation = { lat: 23.8103, lng: 90.4125 };
            setUserLocation(defaultLocation);
            fetchNearbyClubs(defaultLocation);
        }
    };

    const fetchNearbyClubs = (location) => {
        // Simulated cricket clubs data
        // In production, you would fetch this from an API
        const allClubs = [
            {
                id: 1,
                name: 'Dhaka Premier Cricket Club',
                address: 'Mirpur Road, Dhaka 1216',
                lat: 23.8041,
                lng: 90.3687,
                phone: '+880 2 9003456',
                email: 'info@dhakapremier.com',
                facilities: ['Indoor Nets', 'Outdoor Grounds', 'Coaching', 'Gym'],
                image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop',
                rating: 4.8,
                members: 250
            },
            {
                id: 2,
                name: 'Bangladesh Cricket Academy',
                address: 'Shere Bangla National Stadium, Mirpur',
                lat: 23.7967,
                lng: 90.3636,
                phone: '+880 2 9005678',
                email: 'academy@bcb.com.bd',
                facilities: ['Professional Coaching', 'Indoor Nets', 'Fitness Center', 'Video Analysis'],
                image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop',
                rating: 4.9,
                members: 180
            },
            {
                id: 3,
                name: 'Gulshan Cricket Club',
                address: 'Gulshan Avenue, Dhaka 1212',
                lat: 23.7925,
                lng: 90.4078,
                phone: '+880 2 9887654',
                email: 'contact@gulshancricket.com',
                facilities: ['Outdoor Ground', 'Nets', 'Clubhouse', 'Equipment Shop'],
                image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop',
                rating: 4.6,
                members: 150
            },
            {
                id: 4,
                name: 'Dhanmondi Sports Club',
                address: 'Road 27, Dhanmondi, Dhaka 1209',
                lat: 23.7461,
                lng: 90.3742,
                phone: '+880 2 9665432',
                email: 'info@dhanmondisports.com',
                facilities: ['Multi-Sport Ground', 'Nets', 'Coaching', 'Parking'],
                image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop',
                rating: 4.5,
                members: 200
            },
            {
                id: 5,
                name: 'Uttara Cricket Academy',
                address: 'Sector 7, Uttara, Dhaka 1230',
                lat: 23.8759,
                lng: 90.3795,
                phone: '+880 2 8956789',
                email: 'uttara@cricketacademy.com',
                facilities: ['Youth Programs', 'Nets', 'Ground', 'Canteen'],
                image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop',
                rating: 4.7,
                members: 120
            },
            {
                id: 6,
                name: 'Banani Cricket Ground',
                address: 'Road 11, Banani, Dhaka 1213',
                lat: 23.7937,
                lng: 90.4066,
                phone: '+880 2 9834567',
                email: 'banani@cricket.com',
                facilities: ['Ground', 'Nets', 'Lights', 'Seating'],
                image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop',
                rating: 4.4,
                members: 180
            },
            {
                id: 7,
                name: 'Mohammadpur Cricket Club',
                address: 'Mohammadpur, Dhaka 1207',
                lat: 23.7654,
                lng: 90.3563,
                phone: '+880 2 9123456',
                email: 'info@mohammadpurcricket.com',
                facilities: ['Ground', 'Coaching', 'Equipment', 'Parking'],
                image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop',
                rating: 4.3,
                members: 100
            },
            {
                id: 8,
                name: 'Motijheel Sports Complex',
                address: 'Motijheel Commercial Area, Dhaka 1000',
                lat: 23.7337,
                lng: 90.4172,
                phone: '+880 2 9556789',
                email: 'motijheel@sports.com',
                facilities: ['Indoor Nets', 'Multi-Purpose Hall', 'Cafe', 'Shop'],
                image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop',
                rating: 4.2,
                members: 90
            }
        ];

        // Calculate distance for each club
        const clubsWithDistance = allClubs.map(club => ({
            ...club,
            distance: calculateDistance(
                location.lat,
                location.lng,
                club.lat,
                club.lng
            )
        }));

        // Sort by distance
        clubsWithDistance.sort((a, b) => a.distance - b.distance);

        setClubs(clubsWithDistance);
        setLoading(false);
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        // Haversine formula to calculate distance between two coordinates
        const R = 6371; // Radius of Earth in kilometers
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance.toFixed(1);
    };

    const toRad = (value) => {
        return (value * Math.PI) / 180;
    };

    const getDirections = (club) => {
        const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${club.lat},${club.lng}`;
        window.open(url, '_blank');
    };

    const sortedClubs = React.useMemo(() => {
        if (sortBy === 'distance') {
            return [...clubs].sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        } else {
            return [...clubs].sort((a, b) => a.name.localeCompare(b.name));
        }
    }, [clubs, sortBy]);

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 1rem' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <Link to="/dashboard" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#ff7800',
                    textDecoration: 'none',
                    marginBottom: '2rem',
                    fontSize: '1rem',
                    fontWeight: '600'
                }}>
                    ← Back to Dashboard
                </Link>

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        color: 'var(--text-primary)',
                        fontWeight: '700'
                    }}>
                        🏏 Find Cricket Clubs Nearby
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        {loading ? 'Finding cricket clubs near you...' : `Found ${clubs.length} cricket clubs near your location`}
                    </p>
                </div>

                {loading && (
                    <div style={{ textAlign: 'center', padding: '3rem' }}>
                        <div style={{
                            display: 'inline-block',
                            width: '50px',
                            height: '50px',
                            border: '5px solid rgba(255, 120, 0, 0.3)',
                            borderTop: '5px solid #ff6300',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                            Locating nearby cricket clubs...
                        </p>
                        <style>{`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}</style>
                    </div>
                )}

                {!loading && (
                    <>
                        {/* Sort Options */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            marginBottom: '3rem',
                            flexWrap: 'wrap'
                        }}>
                            <button
                                onClick={() => setSortBy('distance')}
                                style={{
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '25px',
                                    border: 'none',
                                    background: sortBy === 'distance'
                                        ? 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
                                        : 'var(--card-bg)',
                                    color: sortBy === 'distance' ? 'white' : 'var(--text-primary)',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: sortBy === 'distance'
                                        ? '0 4px 15px rgba(255, 120, 0, 0.4)'
                                        : '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                Sort by Distance
                            </button>

                            <button
                                onClick={() => setSortBy('name')}
                                style={{
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '25px',
                                    border: 'none',
                                    background: sortBy === 'name'
                                        ? 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)'
                                        : 'var(--card-bg)',
                                    color: sortBy === 'name' ? 'white' : 'var(--text-primary)',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: sortBy === 'name'
                                        ? '0 4px 15px rgba(255, 120, 0, 0.4)'
                                        : '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                Sort by Name
                            </button>

                            <button
                                onClick={getUserLocation}
                                style={{
                                    padding: '0.7rem 1.5rem',
                                    borderRadius: '25px',
                                    border: 'none',
                                    background: '#434343',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(22, 22, 22, 0.4)'
                                }}
                            >
                                Refresh Location
                            </button>
                        </div>

                        {/* Clubs Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                            gap: '2rem',
                            marginBottom: '3rem'
                        }}>
                            {sortedClubs.map((club) => (
                                <div
                                    key={club.id}
                                    onClick={() => setSelectedClub(club)}
                                    style={{
                                        background: 'var(--card-bg)',
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        border: '2px solid transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
                                        e.currentTarget.style.borderColor = '#ff7800';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                                        e.currentTarget.style.borderColor = 'transparent';
                                    }}
                                >
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#1a1a1a' }}>
                                        <img
                                            src={club.image}
                                            alt={club.name}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '15px',
                                            right: '15px',
                                            background: '#3a3a3aff',
                                            color: 'white',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            fontWeight: '700',
                                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                                        }}>
                                            📍 {club.distance} km
                                        </div>
                                        <div style={{
                                            position: 'absolute',
                                            top: '15px',
                                            left: '15px',
                                            background: '#3a3a3aff',
                                            color: 'white',
                                            padding: '0.4rem 0.9rem',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                            fontWeight: '700',
                                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
                                        }}>
                                            ⭐ {club.rating}
                                        </div>
                                    </div>

                                    <div style={{ padding: '1.5rem' }}>
                                        <h3 style={{
                                            fontSize: '1.3rem',
                                            marginBottom: '0.8rem',
                                            color: 'var(--text-primary)',
                                            fontWeight: '700',
                                            lineHeight: '1.4'
                                        }}>
                                            {club.name}
                                        </h3>

                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: 'var(--text-secondary)',
                                            marginBottom: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            📍 {club.address}
                                        </p>

                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: 'var(--text-secondary)',
                                            marginBottom: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}>
                                            👥 {club.members} Members
                                        </p>

                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '0.5rem',
                                            marginBottom: '1rem'
                                        }}>
                                            {club.facilities.slice(0, 3).map((facility, idx) => (
                                                <span
                                                    key={idx}
                                                    style={{
                                                        background: 'rgba(76, 76, 76, 0.4)',
                                                        color: 'var(--text-primary)',
                                                        padding: '0.3rem 0.8rem',
                                                        borderRadius: '12px',
                                                        fontSize: '0.8rem',
                                                        fontWeight: '600'
                                                    }}
                                                >
                                                    {facility}
                                                </span>
                                            ))}
                                            {club.facilities.length > 3 && (
                                                <span style={{
                                                    background: 'rgba(76, 76, 76, 0.4)',
                                                    color: 'var(--text-primary)',
                                                    padding: '0.3rem 0.8rem',
                                                    borderRadius: '12px',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '600'
                                                }}>
                                                    +{club.facilities.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                getDirections(club);
                                            }}
                                            style={{
                                                width: '100%',
                                                padding: '0.8rem',
                                                background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '10px',
                                                fontSize: '0.95rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 120, 0, 0.4)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = 'none';
                                            }}
                                        >
                                            🗺️ Get Directions
                                        </button>
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
                                🏏 Join a Cricket Club Today!
                            </h3>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7', opacity: 0.95 }}>
                                Connect with local cricket communities, improve your skills, and enjoy the game!
                            </p>
                        </div>
                    </>
                )}

                {/* Club Details Modal */}
                {selectedClub && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            padding: '2rem',
                            overflow: 'hidden'
                        }}
                        onClick={() => setSelectedClub(null)}
                    >
                        <div
                            style={{
                                maxWidth: '900px',
                                maxHeight: '90vh',
                                width: '100%',
                                background: 'var(--card-bg)',
                                borderRadius: '15px',
                                overflow: 'auto',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                                position: 'relative'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedClub(null)}
                                style={{
                                    position: 'sticky',
                                    top: '20px',
                                    left: 'calc(100% - 65px)',
                                    background: '#ff7800',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '45px',
                                    height: '45px',
                                    fontSize: '1.8rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    zIndex: 10,
                                    boxShadow: '0 4px 15px rgba(255, 120, 0, 0.4)',
                                    marginBottom: '-45px'
                                }}
                            >
                                ×
                            </button>

                            <img
                                src={selectedClub.image}
                                alt={selectedClub.name}
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover'
                                }}
                            />

                            <div style={{ padding: '2.5rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{
                                        background: '#3a3a3aff',
                                        color: 'white',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: '700',
                                        marginRight: '1rem'
                                    }}>
                                        📍 {selectedClub.distance} km away
                                    </span>
                                    <span style={{
                                        background: '#3a3a3aff',
                                        color: 'white',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: '700'
                                    }}>
                                        ⭐ {selectedClub.rating} Rating
                                    </span>
                                </div>

                                <h1 style={{
                                    fontSize: '2.2rem',
                                    marginBottom: '1.5rem',
                                    color: 'var(--text-primary)',
                                    fontWeight: '700'
                                }}>
                                    {selectedClub.name}
                                </h1>

                                <div style={{ marginBottom: '2rem' }}>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        📍 <strong>Address:</strong> {selectedClub.address}
                                    </p>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        📞 <strong>Phone:</strong> {selectedClub.phone}
                                    </p>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        ✉️ <strong>Email:</strong> {selectedClub.email}
                                    </p>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        👥 <strong>Members:</strong> {selectedClub.members}
                                    </p>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        marginBottom: '1rem',
                                        color: 'var(--text-primary)',
                                        fontWeight: '700'
                                    }}>
                                        🏏 Facilities
                                    </h3>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '0.8rem'
                                    }}>
                                        {selectedClub.facilities.map((facility, idx) => (
                                            <span
                                                key={idx}
                                                style={{
                                                    background: '#3a3a3aff',
                                                    color: 'white',
                                                    padding: '0.6rem 1.2rem',
                                                    borderRadius: '15px',
                                                    fontSize: '0.95rem',
                                                    fontWeight: '600'
                                                }}
                                            >
                                                ✓ {facility}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => getDirections(selectedClub)}
                                    style={{
                                        width: '100%',
                                        padding: '1rem 2rem',
                                        background: 'linear-gradient(135deg, #ff6300 0%, #ff3300 100%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(255, 120, 0, 0.4)'
                                    }}
                                >
                                    🗺️ Get Directions on Google Maps
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CricketClubs;