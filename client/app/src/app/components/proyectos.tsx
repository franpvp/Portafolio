import React, { useEffect, useState } from 'react';
import styles from '@/styles/proyectos.module.css';
import Image from 'next/image';
import CodeImage from '../../../public/images/web.png';
import { AiOutlineCode } from 'react-icons/ai';

import AOS from 'aos';
import 'aos/dist/aos.css';

import imgAppJava from '../../../public/images/westbank.png';
import imgClinicaPage from '../../../public/images/clinicaPage.png';

const Proyectos: React.FC = () => {

    const clickOptionAppBank = () => {
        window.location.href = 'https://github.com/franpvp/westbank';
    }

    const clickOptionClinica = () => {
        window.location.href = 'https://github.com/franpvp/ClinicaProyecto';
    }

    
    useEffect(() => {
        AOS.init({duration:2000});
      }, []);
    return (
        <div className={`container-fluid ${styles.proyectosContainer}`}>
            <div className="row">
                <h2 className={`pt-4 pb-5 ${styles.titleProyectos}`} data-aos="fade-up">Mis Proyectos</h2>
                {/* Proyecto Java GUI */}
                <div className={`col-12 col-sm-12 col-md-6 mb-4`} data-aos="zoom-in">
                    <div className="card text-bg-secondary mb-3 p-3">
                        <Image className={`card-img-top`} src={imgAppJava} alt="img-java"/>
                        <div className="card-body">
                            <h5 className="card-title text-center">Aplicación Bancaria (GUI)</h5>
                            <p className="card-text">
                                Sistema integrado con el motor de base de datos MySQL 
                                que permite llevar a cabo transferencias, giros y depósitos en 
                                las cuentas de los clientes.
                            </p>
                        </div>
                        <div className="card-body d-flex justify-content-middle">
                            <div className={`${styles.javaIcon}`}>
                                Java
                            </div>
                            <div className={`${styles.mysqlIcon}`}>
                                MySQL
                            </div>
                        </div>
                        <div className="card-body">
                            <div className={styles.linkCode} onClick={clickOptionAppBank}>
                                    <AiOutlineCode style={{ marginRight: '10px' }} /> Code
                            </div>
                        </div>
                    </div>
                </div>

                {/* Clinica */}
                <div className={`col-12 col-sm-12 col-md-6 mb-4`} data-aos="zoom-in">
                    <div className={styles.contenedor}>
                        <div className="card text-bg-secondary mb-3 p-3">
                            <Image className={`card-img-top`} src={imgClinicaPage} alt="img-clinica"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Página Clínica</h5>
                                <p className="card-text">
                                    Sistema especializado en el ámbito de la medicina que facilita la programación 
                                    de citas médicas y además de proporcionar información sobre medicamentos a través de 
                                    una API.
                                </p>
                            </div>
                            <div className="card-body d-flex">
                                <div className={`${styles.htmlIcon}`}>
                                    Html
                                </div>
                                <div className={`${styles.cssIcon}`}>
                                    CSS
                                </div>
                                <div className={`${styles.javascriptIcon}`}>
                                    Javascript
                                </div>
                                <div className={`${styles.pythonIcon}`}>
                                    Python
                                </div>
                            </div>
                            <div className="card-body">
                                <div className={styles.linkCode} onClick={clickOptionClinica}>
                                    <AiOutlineCode style={{ marginRight: '10px' }} /> Code
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Proyectos;