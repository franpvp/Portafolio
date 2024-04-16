import React, { useEffect, useState } from "react";
import styles from "@/styles/info.module.css";

import TypingSimulator from "./typingSimulator";
import Image from 'next/image';

// Imagenes
import imgGithub from '../../../public/images/github.png';
import imgLinkedin from '../../../public/images/linkedin.png';


import '../styles/globals.css';

const Info: React.FC = () => {

  const clickGitHub = () => {
    // Aquí puedes añadir la lógica que deseas ejecutar al hacer clic en el botón de LinkedIn
    console.log('Clic en el botón de GitHub');
  };

  const clickLinkedin = () => {
  // Aquí puedes añadir la lógica que deseas ejecutar al hacer clic en el botón de LinkedIn
  console.log('Clic en el botón de Linkedin');
  };

  const textos = [
    "Hola, mi nombre es Francisca.",
    "Bienvenido a mi Portafolio!",
  ];
  
  return (
    <div id="about" style={{ width: '100%' }} className={`container-fluid pt-3 ${styles.contenedorInfo}`}>
      <div className="row">
        <div className="col-lg-12 p-4 d-flex flex-column align-items-center justify-content-center">
          <div className="row">
            <div className="col">
              <img
                src="/images/perfil.jpeg"
                alt="foto-perfil"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col pt-4">
              <TypingSimulator texts={textos} />
            </div>
          </div>
        </div>
    </div>
    <div className="row d-flex justify-content-center">
      <div className="col-xs-10 col-sm-8 col-md-8 col-lg-8">
          <div className={styles.textInfo}>
            <span className={styles.text}>Analista Programador</span>
          </div>
          <div className={styles.textInfo}>
            Me considero una persona proactiva y apasionada por la tecnología y 
            cómo esta transforma nuestro mundo, busco desafíos que me permitan contribuir en proyectos 
            significativos, aportando a equipos multidisciplinarios con mi motivación y ganas de aprender.
            Busco ser una pieza clave para alcanzar los objetivos de cualquier empresa y seguir adquiriendo 
            conocimientos.
          </div>
          <div className="d-flex justify-content-start">
              <a href="https://github.com/franpvp?tab=repositories" onClick={clickGitHub}>
                  <span className="githubIcon navbar-text" style={{ marginLeft: '20px' }}>
                      <Image src={imgGithub} alt="img-github" width={60} height={60} />
                  </span>
              </a>
              
              <a href="https://www.linkedin.com/in/francisca-valdivia-ba60662a5/" onClick={clickLinkedin}>
                  <span className="linkedinIcon navbar-text" style={{ marginLeft: '15px' }}>
                      <Image src={imgLinkedin} alt="img-linkedin" width={60} height={60} />
                  </span>
              </a>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Info;
