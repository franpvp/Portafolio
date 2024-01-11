"use client";
import React, { useEffect, useRef, useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Js 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import "/Users/franciscavaldivia/Desktop/exp-next/client/app/src/app/globals.css";

// Componentes
import Navbar from "./components/nav";
import Info from "./components/info";
import Skills from "./components/skills";
import Formacion from "./components/formacion";
import Proyectos from "./components/proyectos";
import Certificacion from "./components/certificaciones";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import Cursor from "./components/cursor";

type User = {
  id: number;
  name: string;
};

// Client component
const Home: React.FC = () => {

  const [showScrollTop, setShowScrollTop] = useState(false);

  const volverAlInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div >
      <Navbar />
      <Cursor />
      <Info />
      <Skills />
      <Formacion />
      <Proyectos />
      <Certificacion />
      <Contacto />
      <button
        className={`btn-scrolltop ${showScrollTop ? 'btn-scrolltop-on' : ''}`}
        id="btn-scrolltop"
        onClick={volverAlInicio}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <Footer />
      
    </div>
  );
};

export default Home;
