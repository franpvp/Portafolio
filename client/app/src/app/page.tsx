"use client";
import React, { useEffect, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "/Users/franciscavaldivia/Desktop/exp-next/client/app/src/app/globals.css";

// Componentes
import Navbar from "./components/nav";
import Info from "./components/info";
import Skills from "./components/skills";
import Formacion from "./components/formacion";
import Proyectos from "./components/proyectos";
import Certificacion from "./components/certificaciones";
import Contacto from "./components/contacto";
import Footer from "./components/footer";

type User = {
  id: number;
  name: string;
};

// Client component
const Home: React.FC = () => {
  

  return (
    <div>
      <Navbar />
      <Info />
      <Skills />
      <Formacion />
      <Proyectos />
      <Certificacion />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Home;
