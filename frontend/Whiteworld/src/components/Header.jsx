import React from 'react';
import './Header.css';
//import logo from '../assets/logo.png'; // Añade el logo a la carpeta src/assets
//import ukFlag from '../assets/uk-flag.png';
//import esFlag from '../assets/es-flag.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/*<img src={logo} alt="White World Logo" />*/}
      </div>

      <nav className="nav">
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

      <div className="languages">
        
      </div>
    </header>
  );
};

export default Header;