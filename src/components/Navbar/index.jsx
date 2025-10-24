import { useState } from 'react'
import './index.css'
import logo from '../../assets/Logo.png'
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
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
            <Link to='/ce'><a href="/ce">Compréhension écrite</a></Link>
          </li>
          <li>
            <a href="#">Compréhension orale</a>
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
              <li><Link to='/ee/methodologie'><a href="/ee/methodologie">Méthodologie</a></Link></li>
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
          <li className="btns">
            <a href="#" className="btn btn-outline">
              Inscription
            </a>
            <a href="#" className="btn btn-filled">
              Connexion
            </a>
          </li>
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
