import React, { useState } from 'react';
import styles from "@/styles/formacion.module.css"

const Formacion: React.FC = () => {
    // Lista Educación
    const listaEducacion = [
        { 
            año: '2012-2015',
            descripcion: 'Educación Media Complejo Educacional Stella Maris'
        },
        { 
          año: '2022-2024',
          descripcion: 'Carrera Analista Programador Computacional'
        },
    ];

    return (
        <div className={`container-fluid pt-3 ${styles.contenedorFormacion}`}>
            <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12 p-4 d-flex align-items-center justify-content-center">
                <div className={styles.timeline}>
                    {listaEducacion.map((educacion, index) => (
                    <div className={styles.child} key={index}>
                        <div className={styles.content}>
                            {educacion.año}: {educacion.descripcion}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
        
        
    );
}

export default Formacion;