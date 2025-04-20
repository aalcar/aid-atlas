import React from "react";
import NAMILogo from "../assets/NAMI_logo.jpg";

export default function StaffLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div style={{background: '#FCFDFD', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px', padding: '100px', paddingLeft: '470px', paddingRight: '470px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', fontFamily: 'Helvetica, sans-serif', borderRadius: '12px', margin: '40px'}}>
        {/* Logo */}
        <img
          src={NAMILogo}
          alt="NAMI Logo"
          style={{ maxWidth: '50%', maxHeight: '50%' }}
        />

        {/* Welcome Title */}
        <h1 style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '20px' }}>
          Welcome to the Staff Portal
        </h1>


        {/* Form */}
        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
  <div style={{ textAlign: 'left' }}>
    <input
      type="email"
      placeholder="Enter your email"
      style={{
        width: '100%',
        padding: '12px',
        marginTop: '6px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        backgroundColor: '#f9fafb',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
        fontSize: '14px',
        outline: 'none',
      }}
    />
  </div>

  <div style={{ textAlign: 'left' }}>
    <input
      type="password"
      placeholder="Enter your password"
      style={{
        width: '100%',
        padding: '12px',
        marginTop: '6px',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        backgroundColor: '#f9fafb',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
        fontSize: '14px',
        outline: 'none',
      }}
    />
  </div>

  <button
    type="submit"
    style={{
      width: '100%',
      padding: '12px',
      backgroundColor: '#0760B3',
      color: 'white',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      marginTop: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#054A91')}
    onMouseOut={(e) => (e.target.style.backgroundColor = '#0760B3')}
  >
    Log In
  </button>
</form>

        {/* Links */}
        <div className="text-sm mt-6 space-y-1">
          <p>
            Are you a staff member?{" "}
            <a href="#" style={{ color: '#0760B3', textDecoration: 'underline' }}> Access the admin portal </a>
          </p>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-500 mt-8">
          <p>Contact | Privacy</p>
        </div>
      </div>
    </div>
  );
}
