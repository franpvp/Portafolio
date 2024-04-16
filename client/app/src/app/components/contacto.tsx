import React, { useEffect, useState } from "react";
import styles from "@/styles/contacto.module.css";
import { error } from "console";

type Contacto = {
  correo: string;
  mensaje: string;
};

const Contacto: React.FC = () => {
  const [enviado, setEnviado] = useState(false); // Estado para controlar si el correo ha sido enviado

  const enviarCorreo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Enviando correo.....");
    try {
      const formData = new FormData(event.currentTarget);

      let email = formData.get("email");
      let mensaje = formData.get("mensaje");

      console.log(email);
      console.log(mensaje);

      const response = await fetch("http://ec2-50-17-176-47.compute-1.amazonaws.com:3001/api/enviar-correo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: email, mensaje: mensaje }),
      });

      if (response.ok) {
        setEnviado(true); // Establece el estado enviado a verdadero cuando se envía correctamente
      } else {
        throw new Error("Error enviando información");
      }
    } catch (error) {
      console.log("Error enviando información");
    }
  };

  return (
    <div id="contacto" className={`container-fluid pt-4 pb-4 ${styles.contenedorContacto}`}>
      <div className="row">
        <h2 className={`text-center p-2 ${styles.tituloContacto}`}>Contacto</h2>
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6 p-4 mx-auto">
            <form method="post" onSubmit={enviarCorreo}>
              {/* Input de Correo Electrónico */}
                <div className="mb-3">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required/>
                        <label htmlFor="email" style={{ color: 'gray' }}>Correo electrónico:</label>
                    </div>
                </div>
                {/* Input de Mensaje */}
                <div className="mb-3">
                  <div className="form-floating">
                      <textarea 
                          className="form-control" 
                          placeholder="Leave a comment here" 
                          id="mensaje" 
                          name="mensaje" 
                          required
                          maxLength={100} // Define el máximo número de caracteres permitidos
                          style={{ resize: 'none' }} // Evita que el usuario pueda cambiar el tamaño
                      ></textarea>
                      <label htmlFor="mensaje" style={{ color: 'gray' }}>Mensaje:</label>
                  </div>
                </div>
                {/* Boton Contacto */}
                <div className="row pb-3">
                  <div className="col d-flex justify-content-center pb-3"></div>
                  <div className="d-flex justify-content-center">
                    {/* Cambia el div por un botón */}
                    <button type="submit" className={`${styles.btnContacto}`}>Enviar</button>
                  </div>
                </div>
                {/* Alerta de envío exitoso */}
                {enviado && (
                  <div className="alert alert-success text-center" role="alert">
                    Mensaje Enviado
                  </div>
                )}
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
