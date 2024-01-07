import React from 'react';
import styles from '@/styles/contacto.module.css';
import { color } from 'framer-motion';

const Contacto: React.FC = () => {
    return (
        <div id="contacto" className={`container-fluid pt-3 mt-3 ${styles.contenedorContacto}`}>
            <div className="row">
                <h2 className='text-center p-2'>Contacto</h2>
                <div className="col"></div>
                <div className="col-lg-8 p-4">
                    <form method='post' action="#">
                        <div className="col-xs-12 col-md-12 col-lg-12 mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico:</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="col-xs-12 col-md-12 col-lg-12 mb-3">
                            <label htmlFor="mensaje" className="form-label">Mensaje:</label>
                            <textarea className="form-control" id="mensaje" name="mensaje" required></textarea>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto pt-3 pb-3">
                            <button className="btn btn-primary" style={{color: 'gray'}} type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        
    </div>
    );
}

export default Contacto;