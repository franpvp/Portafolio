import React, { useEffect, useState } from 'react';
import styles from '@/styles/proyectos.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Proyectos: React.FC = () => {
    
    useEffect(() => {
        AOS.init({duration:2000});
      }, []);
    return (
        <div className={`container-fluid ${styles.proyectosContainer}`}>
            <div className="row justify-content-center" data-aos="fade-down">
                <h2 className={`${styles.titleProyectos}`}>Mis Proyectos</h2>
                {/* Proyecto Java */}
                <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-4`}>
                    <div className={styles.contenedor}>
                        
                    </div>
                </div>
                <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-4`}>
                    <div className={styles.contenedor}>
                    </div>  
                </div>
                <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-4`}>
                    <div className={styles.contenedor}>
                        
                    </div>
                </div>
                {/* Proyecto Python Flask */}
                <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-4`}>
                    <div className={styles.contenedor}>
                            
                    </div>
                </div>
                {/* Proyecto Ionic */}
                <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-4`}>
                    <div className={styles.contenedor}>
                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;