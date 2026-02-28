import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Award, UserPlus, X, LogOut, User } from 'lucide-react';

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        setShowLogin(false);
    };

    return (
        <nav className="glass-panel" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 32px',
            margin: '20px',
            position: 'sticky',
            top: '20px',
            zIndex: 100
        }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'white' }}>
                <div style={{
                    background: 'var(--gradient-btn)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 0 15px rgba(123, 66, 255, 0.5)'
                }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>S</span>
                </div>
                <span style={{ fontSize: '1.2rem', fontWeight: '600', letterSpacing: '1px' }}>SYMPO</span>
            </Link>

            <div style={{ display: 'flex', gap: '24px' }}>
                <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', transition: 'color 0.3s' }}>
                    <LayoutDashboard size={18} />
                    Events
                </Link>
                <Link to="/certificate" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', transition: 'color 0.3s' }}>
                    <Award size={18} />
                    Certificates
                </Link>
            </div>

            {isLoggedIn ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}>
                        <div style={{ background: 'var(--primary-color)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <User size={16} />
                        </div>
                        <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Hacker</span>
                    </div>
                    <button onClick={() => setIsLoggedIn(false)} style={{ background: 'transparent', border: '1px solid var(--surface-border)', color: 'var(--text-secondary)', padding: '6px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <LogOut size={16} />
                    </button>
                </div>
            ) : (
                <button onClick={() => setShowLogin(true)} className="secondary-btn" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <UserPlus size={16} />
                    Login
                </button>
            )}

            {showLogin && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
                    zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    minHeight: '100vh', width: '100vw'
                }}>
                    <div className="glass-panel" style={{ padding: '40px', width: '100%', maxWidth: '400px', position: 'relative', animation: 'fadeIn 0.3s ease' }}>
                        <button onClick={() => setShowLogin(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                            <X size={24} />
                        </button>
                        <h2 style={{ fontSize: '2rem', marginBottom: '8px', textAlign: 'center' }}>Welcome Back</h2>
                        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '24px' }}>Sign in to manage your events</p>

                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" placeholder="hacker@college.edu" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-input" placeholder="••••••••" required />
                            </div>
                            <button type="submit" className="primary-btn" style={{ width: '100%', marginTop: '16px' }}>
                                Sign In
                            </button>
                        </form>
                        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            New here? <span style={{ color: 'var(--secondary-color)', cursor: 'pointer' }}>Create an account</span>
                        </p>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
