import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary p-3">
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
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link href="#about" style={{ textDecoration: 'none' }}>
                                <p className="nav-link btn btn-outline-secondary" aria-current="page">About Me</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#skills" style={{ textDecoration: 'none' }}>
                                <p className="nav-link btn btn-outline-secondary" aria-current="page">Skills</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#formacion" style={{ textDecoration: 'none' }}>
                                <p className="nav-link btn btn-outline-secondary" aria-current="page">Formación</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#certificacion" style={{ textDecoration: 'none' }}>
                                <p className="nav-link btn btn-outline-secondary" aria-current="page">Certificaciones</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#contacto" style={{ textDecoration: 'none' }}>
                                <p className="nav-link btn btn-outline-secondary" aria-current="page">Contacto</p>
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