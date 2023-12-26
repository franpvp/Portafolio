import React from 'react';
import styles  from '@/styles/footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container-fluid pt-4">
                <div className="row">
                <div className="col-12 text-center">
                    <p>&copy; 2023 Francisca Valdivia. Todos los derechos reservados.</p>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;