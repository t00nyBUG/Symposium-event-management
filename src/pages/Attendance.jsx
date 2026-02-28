import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowLeft, Download, ScanLine } from 'lucide-react';
import { events } from '../data/events';

const Attendance = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = events.find(e => e.id === id);
    const [ticketId, setTicketId] = useState('');

    useEffect(() => {
        // Generate a random ticket ID for demo
        setTicketId(`TKT-${Math.random().toString(36).substring(2, 10).toUpperCase()}`);
    }, []);

    if (!event) return <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Event not found</div>;

    return (
        <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto', animation: 'fadeIn 0.5s ease' }}>
            <button onClick={() => navigate('/')} style={{
                background: 'transparent', border: 'none', color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '24px',
                fontSize: '1rem', fontFamily: 'Outfit'
            }}>
                <ArrowLeft size={18} /> Back to Dashboard
            </button>

            <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative elements */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--primary-color)', filter: 'blur(80px)', opacity: '0.4' }}></div>
                <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '150px', height: '150px', background: 'var(--secondary-color)', filter: 'blur(80px)', opacity: '0.4' }}></div>

                <h2 style={{ fontSize: '1.8rem', marginBottom: '8px', fontWeight: '600', position: 'relative', zIndex: 1 }}>Your Entry Pass</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', position: 'relative', zIndex: 1 }}>Show this QR code at the entrance</p>

                <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '16px',
                    display: 'inline-block',
                    marginBottom: '24px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <QRCodeSVG
                        value={JSON.stringify({ eventId: id, ticketId })}
                        size={200}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"H"}
                        includeMargin={false}
                    />
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', fontWeight: '600', color: 'var(--secondary-color)' }}>{event.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>{event.date} • {event.time}</p>
                    <div style={{
                        background: 'rgba(0,0,0,0.3)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        display: 'inline-block',
                        fontFamily: 'monospace',
                        letterSpacing: '2px',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        {ticketId}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', position: 'relative', zIndex: 1 }}>
                    <button className="primary-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Download size={18} /> Save Pass
                    </button>
                    <button className="secondary-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => navigate('/certificate')}>
                        <ScanLine size={18} /> View Certificates
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
