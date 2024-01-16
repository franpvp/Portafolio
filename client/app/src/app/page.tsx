"use client";
import React, { useEffect, useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
// Styles
import './styles/globals.css';

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

// Client component
const Home: React.FC = () => {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  const volverAlInicio = () => {
    if (typeof window !== 'undefined'){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
  };

  useEffect(() => {
    if (typeof window !== 'undefined'){
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
    }

   
  }, []); 

  return (
    <div>
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
