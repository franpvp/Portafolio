import React, { useEffect, useState } from 'react';
import styles from "@/styles/certificacion.module.css";
import Image from 'next/image';
import ImgEnglishScore from '../../../public/images/EnglishScore.jpg';
import ImgCertDuoc from '../../../public/images/CertDuocUC.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Certificacion: React.FC = () => {
    
    useEffect(() => {
        AOS.init({duration:2000});
      }, []);
    return (
        <div id="certificacion" className={`container-fluid pt-5 ${styles.contenedorCert}`}>
            <div className="row" >
            <h2 className={`text-center pt-5 pb-5`} data-aos="fade-down">Certificaciones</h2>
                {/* EnglishScore */}
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 pb-5 text-center" data-aos="fade-left">
                    <Image
                        src={ImgEnglishScore}
                        alt="EnglishScore"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </div>
                {/* DuocUC */}
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center" data-aos="fade-right">
                    <Image
                        src={ImgCertDuoc}
                        alt="DuocUC"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Certificacion;