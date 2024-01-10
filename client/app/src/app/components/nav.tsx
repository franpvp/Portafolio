import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import '../styles/globals.css';
import styles from '@/styles/nav.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Imagenes
import imgGithub from '../../../public/images/github.png';
import imgLinkedin from '../../../public/images/linkedin.png';

const Navbar: React.FC = () => {

    useEffect(() => {
        AOS.init({duration:2000});
    }, []);

    const clickGitHub = () => {
        // Aquí puedes añadir la lógica que deseas ejecutar al hacer clic en el botón de LinkedIn
        console.log('Clic en el botón de GitHub');
    };

    const clickLinkedin = () => {
    // Aquí puedes añadir la lógica que deseas ejecutar al hacer clic en el botón de LinkedIn
    console.log('Clic en el botón de Linkedin');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Portafolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link href="#about" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link ${styles.btnLink}`} aria-current="page">About Me</p>
                                    </Link> 
                                </li>
                                <li className="nav-item">
                                    <Link href="#skills" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link ${styles.btnLink}`} aria-current="page">Skills</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#formacion" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link ${styles.btnLink}`} aria-current="page">Formación</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#certificacion" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link ${styles.btnLink}`} aria-current="page">Certificaciones</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="#contacto" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link ${styles.btnLink}`} aria-current="page">Contacto</p>
                                    </Link>
                                </li>
                                
                            </ul>
                            <a href="https://github.com/franpvp?tab=repositories" onClick={clickGitHub} data-aos="zoom-in">
                                <span className="githubIcon navbar-text">
                                    <Image src={imgGithub} alt="img-github" width={50} height={50} />
                                </span>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/francisca-valdivia-ba60662a5/" onClick={clickLinkedin} data-aos="zoom-in">
                                <span className="linkedinIcon navbar-text" style={{ marginLeft: '15px' }}>
                                    <Image src={imgLinkedin} alt="img-linkedin" width={50} height={50} />
                                </span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;