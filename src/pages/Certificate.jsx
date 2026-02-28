import React, { useRef } from 'react';
import { Award, Download, Share2 } from 'lucide-react';
import { useRegistration } from '../context/RegistrationContext';
import html2canvas from 'html2canvas';

const Certificate = () => {
    const { registeredUser } = useRegistration();
    const name = registeredUser?.name || 'Your Name'; // Fallback if viewed without registering
    const eventObj = registeredUser?.event;
    const eventTitle = eventObj?.title || 'Future Tech Symposium';
    const eventCategory = eventObj?.category || 'Participation';
    const certificateRef = useRef(null);

    const handleDownload = async () => {
        if (!certificateRef.current) return;

        try {
            const canvas = await html2canvas(certificateRef.current, { scale: 2 });
            const dataUrl = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.download = `Certificate_${name.replace(/\s+/g, '_')}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Failed to download certificate:', error);
            alert('Failed to generate image. Please try again.');
        }
    };

    const handleShare = async () => {
        if (!certificateRef.current) return;

        try {
            const canvas = await html2canvas(certificateRef.current, { scale: 2 });
            canvas.toBlob(async (blob) => {
                if (!blob) return;

                const file = new File([blob], 'certificate.png', { type: 'image/png' });

                if (navigator.share) {
                    await navigator.share({
                        title: 'My Symposium Certificate',
                        text: `Check out my certificate of participation from the Future Tech Symposium 2026!`,
                        files: [file]
                    });
                } else {
                    alert('Native sharing is not supported on this browser. Please download the image and share it manually.');
                }
            });
        } catch (error) {
            console.error('Failed to share certificate:', error);
            alert('Failed to share the certificate. Please try again.');
        }
    };

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto', animation: 'fadeIn 0.5s ease' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '16px' }}>Your Certificates</h1>
                <p style={{ color: 'var(--text-secondary)' }}>View and download your event participation certificates.</p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>

                {/* Certificate Settings */}
                <div className="glass-panel" style={{ padding: '24px', flex: '1 1 300px', maxWidth: '350px', alignSelf: 'flex-start' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Award size={20} color="var(--primary-color)" /> Certificate Details
                    </h3>
                    <div className="form-group" style={{ marginBottom: '24px' }}>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Name on Certificate:</p>
                        <div style={{
                            padding: '12px 16px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--surface-border)',
                            borderRadius: '8px',
                            color: 'white',
                            fontWeight: '500'
                        }}>
                            {name}
                        </div>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.5' }}>
                        This certificate is securely linked to your registration profile and cannot be manually edited.
                    </p>
                    <button onClick={handleDownload} className="primary-btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <Download size={18} /> Download High-Res Image
                    </button>
                    <button onClick={handleShare} className="secondary-btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                        <Share2 size={18} /> Share Certificate
                    </button>
                </div>

                {/* Certificate Preview */}
                <div style={{ flex: '2 1 500px' }}>
                    <div ref={certificateRef} style={{
                        background: '#ffffff',
                        border: '12px solid #283556',
                        borderRadius: '0',
                        padding: '40px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        position: 'relative',
                        aspectRatio: '1.414 / 1', // A4 Landscape ratio
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        overflow: 'hidden'
                    }}>
                        {/* Inner Gold Border */}
                        <div style={{
                            position: 'absolute',
                            top: '10px', left: '10px', right: '10px', bottom: '10px',
                            border: '3px solid #d4af37',
                            zIndex: 1
                        }}></div>

                        {/* Decorative Corners (Navy) */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', background: '#283556', clipPath: 'polygon(0 0, 100% 0, 0 100%)', zIndex: 2 }}></div>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', background: '#283556', clipPath: 'polygon(0 0, 100% 0, 100% 100%)', zIndex: 2 }}></div>
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '40px', background: '#283556', clipPath: 'polygon(0 0, 0 100%, 100% 100%)', zIndex: 2 }}></div>
                        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', background: '#283556', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)', zIndex: 2 }}></div>

                        {/* Decorative Dots */}
                        <div style={{ position: 'absolute', top: '8px', left: '8px', width: '8px', height: '8px', borderRadius: '50%', background: '#d4af37', zIndex: 3 }}></div>
                        <div style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', borderRadius: '50%', background: '#d4af37', zIndex: 3 }}></div>
                        <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '8px', height: '8px', borderRadius: '50%', background: '#d4af37', zIndex: 3 }}></div>
                        <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '8px', height: '8px', borderRadius: '50%', background: '#d4af37', zIndex: 3 }}></div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', zIndex: 10 }}>
                            <Award size={20} color="#283556" />
                            <span style={{ color: '#283556', fontWeight: 'bold', fontSize: '0.9rem' }}>SYMPO</span>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', letterSpacing: '1px', color: '#283556', marginBottom: '12px', fontFamily: '"Times New Roman", Times, serif', zIndex: 10, whiteSpace: 'nowrap', textTransform: 'capitalize' }}>
                            Certificate of {eventCategory}
                        </h2>

                        <p style={{ fontSize: '0.6rem', color: '#b0a373', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px', zIndex: 10 }}>
                            THIS IS TO CERTIFY THAT
                        </p>

                        <h1 style={{ fontSize: '2.8rem', fontWeight: '500', fontFamily: '"Brush Script MT", "Great Vibes", cursive', color: '#283556', marginBottom: '12px', borderBottom: '1px solid #d4af37', paddingBottom: '4px', minWidth: '60%', zIndex: 10 }}>
                            {name || 'Your Name'}
                        </h1>

                        <p style={{ fontSize: '0.7rem', color: '#555', maxWidth: '85%', lineHeight: '1.5', marginBottom: '20px', zIndex: 10 }}>
                            demonstrated exceptional engagement and involvement during the <strong style={{ color: '#283556' }}>{eventTitle}</strong>,
                            which took place in 2026, where they exhibited an enthusiastic and dedicated
                            approach, actively participating for the duration of the event.
                        </p>

                        <div style={{ display: 'flex', width: '90%', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', marginBottom: '16px', zIndex: 10, padding: '0 10px' }}>
                            {/* Dean */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '120px' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Signature_placeholder.svg" alt="Signature" style={{ height: '35px', filter: 'opacity(0.6)' }} />
                                <div style={{ borderTop: '1px solid #283556', width: '100%', marginTop: '4px' }}></div>
                                <p style={{ fontSize: '0.6rem', color: '#283556', fontWeight: 'bold', marginTop: '6px', letterSpacing: '1px' }}>DEAN</p>
                            </div>

                            {/* Seal */}
                            <div style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                border: '2px solid #d4af37',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '0.5rem',
                                color: '#d4af37',
                                background: '#fdfbf7',
                                boxShadow: 'inset 0 0 8px rgba(212, 175, 55, 0.2)'
                            }}>
                                <span style={{ fontSize: '0.8rem' }}>★★★</span>
                                <span style={{ fontWeight: 'bold', marginTop: '2px' }}>ATTENDED</span>
                                <span>2026</span>
                            </div>

                            {/* Principal */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '120px' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Signature_placeholder.svg" alt="Signature" style={{ height: '35px', filter: 'opacity(0.6)' }} />
                                <div style={{ borderTop: '1px solid #283556', width: '100%', marginTop: '4px' }}></div>
                                <p style={{ fontSize: '0.6rem', color: '#283556', fontWeight: 'bold', marginTop: '6px', letterSpacing: '1px' }}>PRINCIPAL</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', width: '85%', justifyContent: 'center', gap: '30px', fontSize: '0.6rem', color: '#333', zIndex: 10 }}>
                            <p><strong>Certificate ID:</strong> {Math.floor(Math.random() * 1000000000)}</p>
                            <p><strong>Issuing Date:</strong> 02.02.2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
