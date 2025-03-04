import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = document.querySelector('.site-header');
      const nav = document.querySelector('.nav');

      if (scrollY > 50) {
        setIsScrolled(true);
        header.style.opacity = 1 - scrollY / 200; // Ajusta el divisor para controlar la velocidad del desvanecimiento
      } else {
        setIsScrolled(false);
        header.style.opacity = 1;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header con la imagen */}
      <header className="site-header">
        <div className="site-branding">
          <div id="wp-custom-header" className="wp-custom-header">
            {/* Logo inside wp-custom-header */}
            <div className="logo-branding">
              <img
                src="https://whiteworld.es/wp-content/uploads/2023/11/logo-copia.png"
                className="custom-logo"
                alt="White World"
                decoding="async"
              />
            </div>

            {/* Background Image */}
            <img
              src="https://whiteworld.es/wp-content/uploads/2023/11/inicio-ww2.png"
              alt="White World Background"
              decoding="async"
            />
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className={`nav ${isScrolled ? 'fixed' : ''}`}>
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

      {/* Título fijo entre el navbar y el contenido principal */}
      <div className="site-branding-text">
        <p className="site-title">
          <a href="https://whiteworld.es/" rel="home">White World</a>
        </p>
        <p className="site-description">
          Sierra Nevada – Alquiler y Venta Ski y Snowboard
        </p>
      </div>
    </>
  );
};

export default Header;