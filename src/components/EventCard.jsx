import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event, index }) => {
    const navigate = useNavigate();

    return (
        <div className={`glass-panel animate-fade-in delay-${(index % 3) + 1}`} style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', color: 'var(--secondary-color)', border: '1px solid rgba(0, 210, 255, 0.3)' }}>
                    {event.category}
                </div>
            </div>

            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', fontWeight: '600' }}>{event.title}</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={16} color="var(--primary-color)" />
                        <span>{event.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={16} color="var(--primary-color)" />
                        <span>{event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={16} color="var(--primary-color)" />
                        <span>{event.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Users size={16} color="var(--primary-color)" />
                        <span>{event.spotsLeft} spots left</span>
                    </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '24px', flex: 1 }}>
                    {event.description}
                </p>

                <button
                    className="primary-btn"
                    style={{ width: '100%' }}
                    onClick={() => navigate(`/register/${event.id}`)}
                >
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default EventCard;
