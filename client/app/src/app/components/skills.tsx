import React, { useEffect, useState } from 'react';
import styles from '@/styles/skills.module.css';
import { useSpring, animated } from 'react-spring';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(() => {
    AOS.init({duration:2000});
  }, []);

  return (
    <div id="skills" className={`row ${styles.selectorSkillsContainer}`}>
      <br />
      <h2 className={`${styles.titleSkills} pb-5`} data-aos="fade-left">Skills</h2>
        {/* Java */}
        <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`} data-aos="fade-down">
          <div className={`text-center pt-4 ${styles.skillsList}`}>
            <div className={`${styles.content}` }>
              <img
                src="/images/java.png"
                alt="java"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
          {/* Contenido Java */}
          <div className={`${styles.skillsList}`}>
            <div className={`${styles.contentSkills}`}>
              <ul className="list-group">
                <li className="list-group-item list-group-item-success ">Nivel intermedio en el lenguaje de programación Java.</li>
                <li className="list-group-item list-group-item-success">Experiencia sólida en Programación Orientada a Objetos (POO).</li>
                <li className="list-group-item list-group-item-success">Aplicación de conceptos como herencia, polimorfismo e interfaces.</li>
                <li className="list-group-item list-group-item-success">Desarrollo de un proyecto práctico: simulación de cuentas bancarias.</li>
                <li className="list-group-item list-group-item-success">Capacidad para abordar problemas complejos de manera lógica y estructurada en Java.</li>
              </ul>
            </div>
          </div>
        </div>
      
      {/* Python Django */}
      <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`} data-aos="fade-down">
        <div className={`text-center pt-4 ${styles.skillsList}`}>
          <div className={styles.content}>
            <img
              src="/images/django-python-logo.png"
              alt="react"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
        {/* Contenido Python Django */}
        <div className={`${styles.skillsList}`}>
          <div className={styles.contentSkills}>
            <ul className="list-group">
              <li className="list-group-item list-group-item-success ">Habilidades intermedias en Python, con enfoque en desarrollo web con Django.</li>
              <li className="list-group-item list-group-item-success">Experiencia en proyectos desde configuración hasta implementación.</li>
              <li className="list-group-item list-group-item-success">Capacidad demostrada en la creación de aplicaciones web eficientes y escalables.</li>
              <li className="list-group-item list-group-item-success">Competencia en la gestión de bases de datos, diseño de vistas y modelos de datos.</li>
              <li className="list-group-item list-group-item-success">Enfoque en la escritura de código limpio y modular.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* SQL */}
      <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`} data-aos="fade-down">
        <div className={`text-center pt-4 ${styles.skillsList}`}>
          <div className={styles.content}>
            <img
              src="/images/sql.png"
              alt="sql"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
        {/* Contenido SQL */}
          <div className={`${styles.skillsList}`}>
            <div className={styles.contentSkills}>
              <ul className="list-group">
                <li className="list-group-item list-group-item-success ">Conocimiento intermedio en el lenguaje SQL.</li>
                <li className="list-group-item list-group-item-success">Habilidad para realizar modelado de bases de datos.</li>
                <li className="list-group-item list-group-item-success">Experiencia en la ejecución de consultas a la base de datos utilizando Java y Python.</li>
                <li className="list-group-item list-group-item-success">Competencia en la manipulación de datos y la optimización de consultas SQL.</li>
                <li className="list-group-item list-group-item-success">Capacidad para trabajar con bases de datos de manera integral, desde el diseño hasta la consulta.</li>
              </ul>
            </div>
          </div>
      </div>
      {/* HTML CSS */}
      <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`} data-aos="fade-up">
        <div className={`text-center pt-4 ${styles.skillsList}`}>
          <div className={styles.content}>
            <img
              src="/images/htmlcss.png"
              alt="html"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
        {/* Contenido HTML CSS */}
          <div className={`${styles.skillsList}`}>
            <div className={styles.contentSkills}>
              <ul className="list-group">
                <li className="list-group-item list-group-item-success ">Nivel intermedio en HTML y CSS.</li>
                <li className="list-group-item list-group-item-success">Experiencia aplicando Bootstrap como framework.</li>
                <li className="list-group-item list-group-item-success">Enfoque en la creación de interfaces limpias y atractivas.</li>
                <li className="list-group-item list-group-item-success">Enfoque en la creación de páginas responsivas.</li>
                <li className="list-group-item list-group-item-success">Destreza en la utilización de la grid de Bootstrap</li>
              </ul>
            </div>
          </div>
      </div>
      {/* NextJs */}
      <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`} data-aos="fade-up">
        <div className={`text-center pt-4 ${styles.skillsList}`}>
          <div className={styles.content}>
            <img
              src="/images/nextjs-logo.webp"
              alt="nextjs"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
        {/* Contenido NextJs */}
          <div className={`${styles.skillsList}`}>
            <div className={styles.contentSkills}>
              <ul className="list-group">
                <li className="list-group-item list-group-item-success ">Conocimientos básicos en el framework Next.js.</li>
                <li className="list-group-item list-group-item-success">Experiencia en la integración de Next.js con React.</li>
                <li className="list-group-item list-group-item-success">Habilidad para crear páginas web de manera efectiva utilizando este framework.</li>
                <li className="list-group-item list-group-item-success">Competencia en la configuración inicial y la estructuración de proyectos con Next.js.</li>
                <li className="list-group-item list-group-item-success">Disposición para ampliar los conocimientos y explorar funcionalidades avanzadas del framework.</li>
              </ul>
            </div>
          </div>
      </div>
      {/* NodeJS ExpressJS */}
      <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-4`} data-aos="fade-up">
        <div className={`text-center pt-4 ${styles.skillsList}`}>
          <div className={styles.content}>
            <img
              src="/images/nodeexpress.png"
              alt="nodeexp"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
        {/* Contenido NodeJS ExpressJS */}
          <div className={`${styles.skillsList}`}>
            <div className={styles.contentSkills}>
              NodeJS ExpressJS Info
            </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;