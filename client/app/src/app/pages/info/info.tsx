import styles from "@/styles/home.module.css"
import React from 'react';

const Info: React.FC = () => {
    return (
      <div className="container bg-light p-4 rounded shadow mt-5">
        <div className="row">
        <div className="col-xs-12"></div>
        <div className="col-xs-12 col-md-6 col-lg-6 p-4 d-flex align-items-center justify-content-center">
          <img
            src="/images/perfil.jpeg"
            alt="foto-perfil"
            style={{
              width: '300px',
              height: '300px',
              padding: '10px',
              borderRadius: '50%',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div className="col-xs-12 col-md-6 col-lg-6">
          <h1 className="text-dark">About me</h1>
          <p className="text-secondary">
            ¡Hola! Mi nombre es Francisca Valdivia, me considero una persona proactiva con la motivación de enfrentar nuevos desafíos y las ganas de aprender y obtener experiencia, me apasiona la tecnología y cómo esta transforma nuestro mundo, mi enfoque está centrado en la búsqueda de trabajos que involucren el desarrollo Full Stack, y de proyectos que tengan un efecto real, quiero participar en equipos multidisciplinarios para poder entregar lo mejor de mí y ser una pieza clave que pueda contribuir de la mejor manera a los objetivos de cualquier empresa en la que me podría estar, y adquirir los conocimientos que pueda.
          </p>
        </div>
        <div className="col-xs-12"></div>
      </div>
      </div>
      
    );
  };
  
  export default Info;