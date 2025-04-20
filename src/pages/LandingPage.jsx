import React from "react";
import { useNavigate } from "react-router-dom";
import NAMILogo from "../assets/NAMI_logo.jpg";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{background: '#FCFDFD', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px', padding: '100px', paddingLeft: '470px', paddingRight: '470px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', fontFamily: 'Helvetica, sans-serif', borderRadius: '12px', margin: '40px'}}>
      <div
        style={{
          background: '#FCFDFD',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '400px',
          padding: '60px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          fontFamily: 'Helvetica, sans-serif',
          borderRadius: '12px',
          margin: '40px',
        }}
      >
        {/* Logo */}
        <img
          src={NAMILogo}
          alt="NAMI Logo"
          style={{ maxWidth: '60%', maxHeight: '60%', marginBottom: '40px' }}
        />

        {/* Volunteer Login Button */}
        <button
          onClick={() => navigate('/volunteer_login')}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#0760B3',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            border: 'none',
            borderRadius: '8px',
            marginBottom: '20px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#054A91')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#0760B3')}
        >
          Volunteer Login
        </button>

        {/* Admin Login Button */}
        <button
          onClick={() => navigate('/staff_login')}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#ffffff',
            color: '#0760B3',
            fontWeight: 'bold',
            fontSize: '16px',
            border: '2px solid #0760B3',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#0760B3';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#0760B3';
          }}
        >
          Admin Login
        </button>
      </div>
    </div>
  );
}
