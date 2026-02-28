import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import { events } from '../data/events';
import { Search, Filter, X } from 'lucide-react';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Symposium', 'Workshop', 'Seminar'];

    const filteredEvents = events.filter(evt => {
        const matchesSearch = evt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            evt.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || evt.category === activeCategory;
        return matchesSearch && matchesCategory;
    });
    return (
        <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto', paddingBottom: '60px' }}>

            {/* Hero Section */}
            <section style={{
                padding: '60px 0',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1 className="animate-fade-in" style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '16px', lineHeight: '1.2' }}>
                    Discover <span style={{ color: 'var(--secondary-color)', textShadow: '0 0 20px rgba(0,210,255,0.4)' }}>Extraordinary</span><br />
                    College Events
                </h1>
                <p className="animate-fade-in delay-1" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', marginBottom: '40px' }}>
                    The smart management portal for symposiums, workshops, and seminars. Register, attend, and get certified seamlessly.
                </p>

                <div className="glass-panel animate-fade-in delay-2" style={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '500px',
                    padding: '8px',
                    borderRadius: '50px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', color: 'var(--text-secondary)' }}>
                        <Search size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search events, workshops..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            flex: 1,
                            outline: 'none',
                            fontFamily: 'Outfit',
                            fontSize: '1rem'
                        }}
                    />
                    {searchTerm && (
                        <button onClick={() => setSearchTerm('')} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0 8px' }}>
                            <X size={16} />
                        </button>
                    )}
                    <button className="primary-btn" style={{ borderRadius: '40px', padding: '10px 24px' }}>
                        Search
                    </button>
                </div>
            </section>

            {/* Events Feed Section */}
            <section>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '600' }}>Upcoming Events</h2>

                    <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={activeCategory === cat ? 'primary-btn' : 'secondary-btn'}
                                style={{ padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '24px'
                }}>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((evt, idx) => (
                            <EventCard key={evt.id} event={evt} index={idx} />
                        ))
                    ) : (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
                            <Search size={48} style={{ opacity: 0.2, marginBottom: '16px' }} />
                            <h3>No events found matching your criteria.</h3>
                            <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} className="secondary-btn" style={{ marginTop: '16px' }}>Clear Filters</button>
                        </div>
                    )}
                </div>
            </section>

        </div>
    );
};

export default Home;
