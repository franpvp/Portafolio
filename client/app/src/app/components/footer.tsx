import React from 'react';
import styles  from '@/styles/footer.module.css';
import { color } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className={`container-fluid pt-4 ${styles.containerFooter}`}>
                <div className="row">
                <div className="col-12 text-center" style={{color:"white"}}>
                    <p>&copy; 2023 Francisca Valdivia. Todos los derechos reservados.</p>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;