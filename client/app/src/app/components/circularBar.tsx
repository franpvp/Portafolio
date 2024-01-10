import React, { useEffect, useState } from 'react';
import styles from "@/styles/circularBar.module.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { count } from 'console';

const CircularBar: React.FC = () => {

    useEffect(() => {
        AOS.init({duration:2000});
      }, []);

    const [contador, setContador] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          if (contador === 65) {
            clearInterval(interval);
          } else {
            setContador((prevContador) => prevContador + 1);
          }
        }, 20);
    
        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
      }, [contador]);

    return (
        <div className={styles.contenedorSkill}>
            <div className={styles.skillBar}>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div id={styles.number}>
                            {`${contador}%`}
                        </div>
                    </div>
                </div>
            </div>

            <svg className={styles.mask} width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className={styles.circle} cx="80" cy="80" r="70" fill="black"/>
            </svg>

        </div>
        
        
    );
}

export default CircularBar;