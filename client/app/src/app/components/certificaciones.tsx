import React, { useState } from 'react';
import styles from "@/styles/certificacion.module.css"

const Certificacion: React.FC = () => {
    return (
        <div id="certificacion" className={`container-fluid pt-5 ${styles.contenedorCert}`}>
            <div className="row">
            <h2 className={`text-center pt-5 pb-5`}>Certificaciones</h2>
                {/* EnglishScore */}
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 pb-5 text-center">
                    <img
                        src="/images/EnglishScore.jpg"
                        alt="EnglishScore"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                    <button type="button" className="btn btn-light mt-4">Descargar</button>
                </div>
                {/* DuocUC */}
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center">
                    <img
                        src="/images/CertDuocUC.jpg"
                        alt="DuocUC"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '20px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                    <button type="button" className="btn btn-light mt-4 mb-4">Descargar</button>
                </div>
            </div>
        </div>
    );
}

export default Certificacion;