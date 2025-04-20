import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <Link to="/" style={{ marginRight: '16px' }}>Home</Link>
            <Link to="/apply" style={{ marginRight: '16px' }}>Apply</Link>
            <Link to="/admin">Admin</Link>
        </nav>
    );
}

export default NavBar;