// src/components/Home.jsx
import React from 'react';
import './Home.css';
import heroImage from '../assets/images/heroImage.jpg'; // Usa una imagen local o un enlace externo

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
			<p>Desde hace más de 25&nbsp;años llevamos ofreciendo nuestros servicios a todas aquellas personas que quieren disfrutar de los deportes de nieve en cualquiera de sus modalidades, bien sea sobre unos skies o sobre un snowboard.</p>
            <p>Nuestra experiencia nos permite asesorar&nbsp;sobre el material más adecuado para cada persona, en función de sus técnica, forma física, morfología, etc… Disponemos de material para la venta y el alquiler, además de una escuela con la que aprender o mejorar tu forma de deslizarte sobre la nieve.</p>
            <p>Solicita cualquier necesidad que tengas, nuestro trabajo es ayudarte a disfrutar al máximo de tu estancia en Sierra Nevada.</p>
      <img src={heroImage} alt="Esquiador en la montaña" className="hero-image" />
      </div>
    </section>
  );
};

export default Home;
