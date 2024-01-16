import React, { useEffect, useState } from "react";
import styles from "@/styles/skills.module.css";
import { useSpring, animated } from "react-spring";

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (contador === 65) {
        clearInterval(interval);
      } else {
        setContador((prevContador) => prevContador + 1);
      }
    }, 20);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [contador]);

  return (
    <div id="skills" className={`container-fluid ${styles.selectorSkillsContainer}`}>
      <div className="row">
        <br />
        <h2 className={`${styles.titleSkills} pb-5`}>
          Skills
        </h2>
        {/* Java */}
        <div
          className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}
        >
          <div className={`text-center pt-4 ${styles.skillsList}`}>
            <div className={`${styles.content}`}>
              <img
                src="/images/java.png"
                alt="java"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Python Django */}
        <div
          className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}
        >
          <div className={`text-center pt-4 ${styles.skillsList}`}>
            <div className={`${styles.content}`}>
              <img
                src="/images/django-python-logo.png"
                alt="java"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
        {/* SQL */}
        <div
          className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}
        >
          <div className={`text-center pt-4 ${styles.skillsList}`}>
            <div className={`${styles.content}`}>
              <img
                src="/images/sql.png"
                alt="java"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>

        {/* HTML CSS */}
        <div
          className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}
        >
          <div className={`text-center pt-4 ${styles.skillsList}`}>
            <div className={`${styles.content}`}>
              <img
                src="/images/htmlcss.png"
                alt="java"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
        {/* React */}
        <div
          className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}
        >
          <div className={`text-center pt-4 ${styles.skillsList}`}>
            <div className={`${styles.content}`}>
              <img
                src="/images/react-logo.png"
                alt="java"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
        {/* NodeJS ExpressJS */}
        <div
          className={`col-xs-12 col-sm-12 col-md-6 col-lg-4`}
        >
          <div className={`text-center pt-4 ${styles.skillsList}`}>
            <div className={`${styles.content}`}>
              <img
                src="/images/mysql.png"
                alt="java"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
