import React, { useState } from "react";
import styles from "@/styles/info.module.css";

import TypingSimulator from "./typingSimulator";
import useMousePosition from "./useMousePosition";
import { motion } from "framer-motion";


const Info: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const textos = [
    "Hola, mi nombre es Francisca.",
    "Bienvenido a mi Portafolio!",
  ];

  return (
    <div id="about" className={`container-fluid pt-3 ${styles.contenedorInfo}`}>
      <div className="row">
        <div className="col-lg-6 p-4 d-flex align-items-center justify-content-center">
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
              <div className="col pt-4">
                <TypingSimulator texts={textos} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={styles.main}>
            <h1 className={styles.titleInfo}>About me</h1>
            <motion.div
              className={styles.mask}
              animate={{

                WebkitMaskPosition: `${x - 5}px ${y - 5}px`,
      
                WebkitMaskSize: `${size}px`,
      
              }}
              transition={{ type: "tween", ease: "backOut", duration:0.5}}>
              <p>
                ¡Hola! Mi nombre es Francisca Valdivia, me considero una persona
                proactiva con la motivación de enfrentar nuevos desafíos y las
                ganas de aprender y obtener experiencia, me apasiona la
                tecnología y cómo esta transforma nuestro mundo, mi enfoque está
                centrado en la búsqueda de trabajos que involucren el desarrollo
                Full Stack, y de proyectos que tengan un efecto real, quiero
                participar en equipos multidisciplinarios para poder entregar lo
                mejor de mí y ser una pieza clave que pueda contribuir de la
                mejor manera a los objetivos de cualquier empresa en la que me
                podría estar, y adquirir los conocimientos que pueda.
              </p>
            </motion.div>
            <p>
              ¡Hola! Mi nombre es Francisca Valdivia, me considero una persona
              proactiva con la motivación de enfrentar nuevos desafíos y las
              ganas de aprender y obtener experiencia, me apasiona la tecnología
              y cómo esta transforma nuestro mundo, mi enfoque está centrado en
              la búsqueda de trabajos que involucren el desarrollo Full Stack, y
              de proyectos que tengan un efecto real, quiero participar en
              equipos multidisciplinarios para poder entregar lo mejor de mí y
              ser una pieza clave que pueda contribuir de la mejor manera a los
              objetivos de cualquier empresa en la que me podría estar, y
              adquirir los conocimientos que pueda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
