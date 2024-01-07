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
            <div className="row" data-aos="fade-down">
                <h2 className={`${styles.titleProyectos}`}>Mis Proyectos</h2>
                {/* Proyecto Java */}
                <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}>
                    Banco WestBank
                </div>
                <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}>
                {/* Proyecto Python Django */}
                </div>
                <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}>
                    GamerStoreCL
                </div>
                {/* Proyecto Python Flask */}
                <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}>
                    
                </div>
                {/* Proyecto Ionic */}
                <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-4`}>
                    
                </div>
            </div>
        </div>
    );
}

export default Proyectos;