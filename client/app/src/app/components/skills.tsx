import React, { useState } from 'react';
import styles from '@/styles/skills.module.css';
import { useSpring, animated } from 'react-spring';

  
const Skills = () => {

  return (
    <div id="skills" className={`row ${styles.selectorSkillsContainer}`}>
      <h2 className={`${styles.titleSkills}`}>Skills</h2>
      <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-4`}>
        {/* Java */}
        <div className={`text-center ${styles.skillsList}`}>
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
      </div>
      {/* Python */}
      <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-4`}>
        <div className={`text-center pt-4 ${styles.skillsList}`}>
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
      {/* SQL */}
      <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-4`}>
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
      </div>
      {/* HTML CSS */}
      <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-4`}>
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
      </div>
      {/* Python Django */}
      <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-4`}>
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
      </div>
      {/* NextJs */}
      <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-4`}>
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
      </div>
      {/* React */}
      <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-4`}>
        <div className={`text-center pt-4 ${styles.skillsList}`}>
          <div className={styles.content}>
            <img
              src="/images/react-logo.png"
              alt="react"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '50%',
              }}
            />
          </div>
        </div>
      </div>
      {/* NodeJS ExpressJS */}
      <div className={`col-xs-12 col-sm-6 col-md-4 col-lg-4`}>
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
      </div>
    </div>

  );
};

export default Skills;