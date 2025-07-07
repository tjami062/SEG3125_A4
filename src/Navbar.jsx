import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">PlaceHolder</Link>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search keyboards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      <div className="nav-links">
        <div className="dropdown">
          <span className="dropbtn">Shop ▾</span>
          <div className="dropdown-content">
            <Link to="/shop?category=keycaps">Keycaps</Link>
            <Link to="/shop?category=pcbs">PCBs</Link>
            <Link to="/shop?category=cases">Cases</Link>
            <Link to="/shop?category=switches">Switches</Link>
          </div>
        </div>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}