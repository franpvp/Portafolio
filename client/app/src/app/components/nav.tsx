import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/nav.module.css';

const Navbar: React.FC = () => {
    const offcanvasRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleEscapeKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('keydown', handleEscapeKeyPress);
        } else {
            document.removeEventListener('keydown', handleEscapeKeyPress);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress);
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    const smoothScrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg p-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`offcanvas offcanvas-end ${menuOpen ? 'show' : ''}`} tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" ref={offcanvasRef}>
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <div className={styles.closeButton} onClick={handleCloseMenu} aria-label="Close">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>
                        <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1">
                            <li className="nav-item ml-3 mr-3">
                                <Link href="#about" style={{ textDecoration: 'none' }}>
                                    <p className={`nav-link ${styles.btnLink}`} onClick={handleCloseMenu}>About Me</p>
                                </Link>
                            </li>
                            <li className="nav-item ml-3 mr-3">
                                <Link href="#skills" style={{ textDecoration: 'none' }}>
                                    <p className={`nav-link ${styles.btnLink}`} onClick={handleCloseMenu}>Skills</p>
                                </Link>
                            </li>
                            <li className="nav-item ml-3 mr-3">
                                <Link href="#formacion" style={{ textDecoration: 'none' }}>
                                    <p className={`nav-link ${styles.btnLink}`} onClick={handleCloseMenu}>Formación</p>
                                </Link>
                            </li>
                            <li className="nav-item ml-3 mr-3">
                                <Link href="#certificacion" style={{ textDecoration: 'none' }}>
                                    <p className={`nav-link ${styles.btnLink}`} onClick={handleCloseMenu}>Certificaciones</p>
                                </Link>
                            </li>
                            <li className="nav-item ml-3 mr-3">
                                <Link href="#contacto" style={{ textDecoration: 'none' }}>
                                    <p className={`nav-link ${styles.btnLink}`} onClick={handleCloseMenu}>Contacto</p>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
