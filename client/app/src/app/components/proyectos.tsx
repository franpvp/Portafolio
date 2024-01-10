import React, { useEffect, useState } from 'react';
import styles from '@/styles/proyectos.module.css';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';

import imgAppJava from '../../../public/images/JavaApp.png';
import imgClinicaPage from '../../../public/images/clinicaPage.png';

const Proyectos: React.FC = () => {
    
    useEffect(() => {
        AOS.init({duration:2000});
      }, []);
    return (
        <div className={`container-fluid ${styles.proyectosContainer}`}>
            <div className="row" data-aos="fade-down">
                <h2 className={`pt-4 pb-5 ${styles.titleProyectos}`}>Mis Proyectos</h2>
                {/* Proyecto Java GUI */}
                <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center pt-3 pb-3`} data-aos="zoom-in">
                    <div className={styles.contenedor}>
                        <Image className={styles.imagen} src={imgAppJava} alt="img-java"/>
                    </div>
                </div>
                {/* Clinica */}
                <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center pt-3 pb-3`} data-aos="zoom-in">
                    <div className={styles.contenedor}>
                        <Image className={styles.imagen} src={imgClinicaPage} alt="img-clinica"/>
                    </div>  
                </div>
                {/* Proyecto Ionic */}
                {/* <div className={`col-xs-12 col-sm-12 col-md-6 col-lg-4`}>
                    <div className={styles.contenedor}>
                        
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Proyectos;