import React, { useEffect, useState } from "react";
import styles from "@/styles/info.module.css";

import TypingSimulator from "./typingSimulator";
import { motion } from "framer-motion";

import AOS from 'aos';
import 'aos/dist/aos.css';

import '../styles/globals.css';

const Info: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    AOS.init({duration:2000});
  }, []);

  const textos = [
    "Hola, mi nombre es Francisca.",
    "Bienvenido a mi Portafolio!",
  ];
  

  return (
    <div id="about" className={`container-fluid pt-3 ${styles.contenedorInfo}`}>
      <div className="row">
        <div className="col-lg-5 p-4 d-flex align-items-center justify-content-center">
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
                data-aos="zoom-in"
              />
              <div className="col pt-4" data-aos="fade-up">
                <TypingSimulator texts={textos} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up">
            <h1 className={`pt-5 pb-4 ${styles.titleInfo}`} >About me</h1>
            <div className={styles.textInfo}>
                ¡Hola! Mi nombre es Francisca <span className={styles.text}>Analista Programador</span>, soy una persona
                proactiva con la motivación de enfrentar nuevos desafíos y las
                ganas de aprender y obtener experiencia, me apasiona la
                tecnología y cómo esta transforma nuestro mundo, mi enfoque está
                centrado en la búsqueda de trabajos que involucren el desarrollo
                Full Stack, y de proyectos que tengan un efecto real, quiero
                participar en equipos multidisciplinarios para poder entregar lo
                mejor de mí y ser una pieza clave que pueda contribuir de la
                mejor manera a los objetivos de cualquier empresa en la que me
                podría estar, y adquirir los conocimientos que pueda.
            </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
