import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../data/events';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';

const Register = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = events.find(e => e.id === id);
    const [submitted, setSubmitted] = useState(false);
    const { registerUser } = useRegistration();

    if (!event) return <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Event not found</div>;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Extract form data
        const formData = new FormData(e.target);
        const name = formData.get('fullName');

        // Save to global context (including the active event)
        registerUser({ name, event });

        setSubmitted(true);
        // Simulate API call and redirect
        setTimeout(() => {
            navigate(`/attendance/${id}`);
        }, 2000);
    };

    return (
        <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', animation: 'fadeIn 0.5s ease' }}>

            <button onClick={() => navigate(-1)} style={{
                background: 'transparent', border: 'none', color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '24px',
                fontSize: '1rem', fontFamily: 'Outfit'
            }}>
                <ArrowLeft size={18} /> Back
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(350px, 1fr)', gap: '40px' }}>

                {/* Event Summary Side */}
                <div>
                    <div style={{ height: '240px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                        <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '16px', fontWeight: '600' }}>{event.title}</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{event.description}</p>
                    <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(123, 66, 255, 0.1)', borderRadius: '12px', border: '1px solid rgba(123, 66, 255, 0.2)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Registration Info</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>You are booking 1 of the remaining <strong style={{ color: 'white' }}>{event.spotsLeft}</strong> spots.</p>
                    </div>
                </div>

                {/* Form Side */}
                <div className="glass-panel" style={{ padding: '32px' }}>
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '40px 0', animation: 'fadeIn 0.5s ease' }}>
                            <CheckCircle size={64} color="var(--success)" style={{ marginBottom: '20px' }} />
                            <h2 style={{ marginBottom: '12px' }}>Registration Successful!</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>Redirecting to your entry QR code...</p>
                        </div>
                    ) : (
                        <>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '16px' }}>Attendee Details</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" name="fullName" className="form-input" placeholder="John Doe" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-input" placeholder="john@university.edu" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Student ID / Registration No.</label>
                                    <input type="text" className="form-input" placeholder="e.g. 2023CS001" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Year of Study</label>
                                    <select className="form-input" required style={{ appearance: 'none', background: 'rgba(0,0,0,0.4)', backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7em top 50%', backgroundSize: '.65em auto' }}>
                                        <option value="" disabled selected>Select Year</option>
                                        <option value="1">1st Year</option>
                                        <option value="2">2nd Year</option>
                                        <option value="3">3rd Year</option>
                                        <option value="4">4th Year</option>
                                    </select>
                                </div>

                                <button type="submit" className="primary-btn" style={{ width: '100%', marginTop: '16px', padding: '14px' }}>
                                    Confirm Registration
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;
