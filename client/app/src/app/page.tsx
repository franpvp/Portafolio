"use client";
import { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Componentes
import Navbar from "./components/nav";
import Info from './components/info';
import Skills from './components/skills';
import Formacion from "./components/formacion";
import Contacto from "./components/contacto";
import Certificacion from "./components/certificaciones";
import Footer from "./components/footer";


type User = {
  id: number;
  name: string;
};

// Client component
const Home = () => {
  // const [data, setData] = useState<User[]>([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/api/v1/users");
  //       const resData = await res.json();
  //       setData(resData.users);
  //       return resData;
  //     } catch (error) {
  //       throw error;
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  return (
    
    <div>
      <Navbar/>
      <Info />
      <Skills />
      <Formacion />
      <Certificacion />
      <Contacto />
      <Footer />
      
    </div>
      
  );
};
export default Home;
