import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div style={{ minHeight: '100vh', padding: '3rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <i className="ri-mail-send-line" style={{ color: '#ff7800' }}></i>
                        Contact Us
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Have questions? We'd love to hear from you!
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                    {/* Contact Form */}
                    <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--text-primary)' }}>Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
                                />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
                                />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
                                />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-primary)' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', resize: 'vertical', background: 'var(--card-bg)', color: 'var(--text-primary)' }}
                                ></textarea>
                            </div>
                            <button type="submit" style={{ width: '100%', padding: '1rem', background: '#ff7800', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.3rem', color: 'var(--text-primary)' }}>Contact Information</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <i className="ri-mail-line" style={{ fontSize: '1.5rem', color: '#ff7800' }}></i>
                                    <div>
                                        <p style={{ fontWeight: '600', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>Email</p>
                                        <p style={{ color: 'var(--text-secondary)' }}>info@allinonecricket.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <i className="ri-phone-line" style={{ fontSize: '1.5rem', color: '#ff7800' }}></i>
                                    <div>
                                        <p style={{ fontWeight: '600', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>Phone</p>
                                        <p style={{ color: 'var(--text-secondary)' }}>+880 1234567891</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <i className="ri-map-pin-line" style={{ fontSize: '1.5rem', color: '#ff7800' }}></i>
                                    <div>
                                        <p style={{ fontWeight: '600', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>Address</p>
                                        <p style={{ color: 'var(--text-secondary)' }}>Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem', color: 'var(--text-primary)' }}>Follow Us</h3>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#3b5998', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', textDecoration: 'none', transition: 'transform 0.3s ease' }}>
                                    <i className="ri-facebook-fill"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#1da1f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', textDecoration: 'none', transition: 'transform 0.3s ease' }}>
                                    <i className="ri-twitter-fill"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', textDecoration: 'none', transition: 'transform 0.3s ease' }}>
                                    <i className="ri-instagram-fill"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#ff0000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', textDecoration: 'none', transition: 'transform 0.3s ease' }}>
                                    <i className="ri-youtube-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;