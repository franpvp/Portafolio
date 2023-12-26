import React, { useState } from 'react';
import styles from '@/styles/skills.module.css';
import { useSpring, animated } from 'react-spring';

  
const Skills = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleJavaClick = () => {
    setSelectedLanguage('java');
  };

  const handlePythonClick = () => {
    setSelectedLanguage('python');
  };

  return (
    <div className={`row ${styles.selectorSkillsContainer}`}>
      <div className={`col-md-6 col-lg-6`}>
        <h2 className={styles.titleSkills}>Skills</h2>
        {/* Java */}
        <div className={`text-center ${styles.skillsList}`} onClick={handleJavaClick}>
          <div className={styles.content}>
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
        {/* Python */}
        <div className={`text-center pt-4 ${styles.skillsList}`} onClick={handlePythonClick}>
          <div className={styles.content}>
            <img
              src="/images/python.png"
              alt="python"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>
      {/* Contenido */}
      {selectedLanguage && (
          <div className={`col-md-6 col-lg-6 ${styles.contentSkills}`}>
            Contenido {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}
          </div>
        )}
    </div>

  );
};

export default Skills;