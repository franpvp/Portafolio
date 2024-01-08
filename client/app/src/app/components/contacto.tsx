import React, { useEffect, useState } from 'react';
import styles from '@/styles/contacto.module.css';
import { color } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { error } from 'console';

type Contacto = {
    correo: string;
    mensaje: string;
  };

const Contacto: React.FC = () => {

    const enviarCorreo = async (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch("http://localhost:3001/api/enviar-correo", {
                method: 'POST',
                body: formData
            })
            if(!response.ok) {
                throw new Error("Error enviando información");
            }
            const data = await response.json();
        } catch (error) {
            console.log("Error enviando información")
        }
    };

    useEffect(() => {
        AOS.init({duration:2000});
    }, []);
      
    return (
        <div id="contacto" className={`container-fluid pt-4 pb-4 ${styles.contenedorContacto}`}>
            <div className="row" data-aos="fade-up">
                <h2 className={`text-center p-2 ${styles.tituloContacto}`}>Contacto</h2>
                <div className="col"></div>
                <div className="col-lg-8 p-4">
                    <form method='post' action="#" onSubmit={enviarCorreo}>
                        <div className="col-xs-12 col-md-12 col-lg-12 mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico:</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="col-xs-12 col-md-12 col-lg-12 mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje:</label>
                            <textarea className="form-control" id="mensaje" name="mensaje" required></textarea>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto pt-3 pb-3">
                            <button className="d-flex justify-content-center" type="submit">
                                <div className={`${styles.btnContacto}`}>
                                    Enviar
                                </div>
                            </button>
                            
                        </div>
                        
                    </form>
                </div>
                <div className="col"></div>
            </div>
        
    </div>
    );
}

export default Contacto;