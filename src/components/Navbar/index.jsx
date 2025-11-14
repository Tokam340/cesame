import { useState } from 'react'
import './index.css'
import logo from '../../assets/Logo.png'
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const token = localStorage.getItem("token");

  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");  // enlever le token
  };

  return (
    <>
      <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo"><Link to='/'><img src={logo} alt="logo du site" /></Link></div>

        {/* Liens */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to='/ce'>Compréhension écrite</Link>
          </li>
          <li>
            <Link to='/co'>Compréhension orale</Link>
          </li>

          {/* Expression écrite avec sous-menu */}
          <li
            className="has-dropdown"
            onMouseEnter={() => toggleDropdown("ecrite")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="#">Expression écrite ▾</a>
            <ul
              className={`dropdown ${
                dropdown === "ecrite" ? "show" : ""
              }`}
            >
              <li><Link to='/ee/methodologie'>Méthodologie</Link></li>
              <li><a href="#">Sujets Récents</a></li>
            </ul>
          </li>

          {/* Expression orale avec sous-menu */}
          <li
            className="has-dropdown"
            onMouseEnter={() => toggleDropdown("orale")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="#">Expression orale ▾</a>
            <ul
              className={`dropdown ${
                dropdown === "orale" ? "show" : ""
              }`}
            >
              <li><a href="#">Méthodologie</a></li>
              <li><a href="#">Sujets Récents</a></li>
            </ul>
          </li>

          {/* Boutons */}
          {!token ? <li className="btns">
            <a href="/register" id='btn-outline'>
              Inscription
            </a>
            <a href="/login" id='btn-filled'>
              Connexion
            </a>
          </li> : <a onClick={handleLogout} href="/login" id='btn-outline'>Logout</a>}
        </ul>

        {/* Burger */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar
