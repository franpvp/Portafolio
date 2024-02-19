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
    if (typeof window !== 'undefined') {
      const currentPosition = window.scrollY;
      const targetPosition = 0;
      const distance = targetPosition - currentPosition;
      const immediateDuration = 800; // Duración en milisegundos (ms) para el desplazamiento inmediato
      const constantDuration = 800; // Duración en milisegundos (ms) para el desplazamiento constante
  
      const startTime = performance.now();
  
      // Desplazamiento inmediato al inicio
      window.scrollTo(0, targetPosition);
  
      const animateScroll = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / constantDuration, 1);
        const newPosition = currentPosition + distance * progress;
  
        window.scrollTo(0, newPosition);
  
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
  
      // Inicia el desplazamiento constante después del desplazamiento inmediato
      setTimeout(() => {
        requestAnimationFrame(animateScroll);
      }, immediateDuration);
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
      <Cursor />
      <Navbar />
      <Info />
      <Skills />
      <Formacion />
      <Proyectos />
      <Certificacion />
      <Contacto />
      <div
        className={`btn-scrolltop ${showScrollTop ? 'btn-scrolltop-on' : ''}`}
        id="btn-scrolltop"
        onClick={volverAlInicio}>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <Footer />
      
    </div>
  );
};

export default Home;
