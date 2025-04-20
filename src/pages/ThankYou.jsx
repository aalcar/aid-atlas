import React from 'react';

export default function ThankYouPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        fontFamily: 'Helvetica, sans-serif',
        backgroundColor: '#f9fafb',
        color: '#1a1a1a',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Thank you for submitting!
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        We'll be in touch with you shortly regarding your account and application.
      </p>
    </div>
  );
}
