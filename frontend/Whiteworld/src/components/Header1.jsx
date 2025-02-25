import React, { useState } from 'react';
import './Header1.css';
import logo from '../assets/images/logo.png';
import esquiador from '../assets/images/esquiador.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <div className="site-branding" style={{ marginBottom: '0px' }}>
        <div id="wp-custom-header" className="wp-custom-header">
          {/* Logo inside wp-custom-header */}
          <div className="logo-branding">
            <img
              width="1250"
              height="250"
              src="https://whiteworld.es/wp-content/uploads/2023/11/logo-copia.png"
              className="custom-logo"
              alt="White World"
              decoding="async"
            />
          </div>

          {/* Background Image */}
          <img
            fetchpriority="high"
            src="https://whiteworld.es/wp-content/uploads/2023/11/inicio-ww2.png"
            alt="White World Background"
            decoding="async"
          />
        </div>

        <div className="site-branding-text">
          <p className="site-title">
            <a href="https://whiteworld.es/" rel="home">White World</a>
          </p>
          <p className="site-description">
            Sierra Nevada – Alquiler y Venta Ski y Snowboard
          </p>
        </div>
      </div>

      {/* Menu Icon */}
      <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">White World</a></li>
          <li><a href="#alquiler">Alquiler</a></li>
          <li><a href="#escuela">Escuela</a></li>
          <li><a href="#tienda">Tienda</a></li>
          <li><a href="#alojamiento">Alojamiento</a></li>
          <li><a href="#donde-estamos">Dónde estamos</a></li>
          <li><a href="#en-pistas">En pistas</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
