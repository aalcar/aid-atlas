import React from 'react';
import NAMILogo from '../assets/NAMI_logo.jpg'
import { useNavigate } from 'react-router-dom'

export default function ThankYouPage() {
    const navigate = useNavigate(); 
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
      }}>
         <header style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ffffff",
            padding: "16px 32px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }}>
        
    
            <button
            onClick={() => navigate('../')}
            style={{
                padding: "8px 20px",
                backgroundColor: "#3174ad",
                color: "white",
                fontWeight: "bold",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
            }}>
                Back to Landing Page
            </button>
        </header>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Thank you for submitting!
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        We'll be in touch with you shortly regarding your account and application.
      </p>
    </div>
  );
}
