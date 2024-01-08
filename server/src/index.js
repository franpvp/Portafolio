import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

const sendEmail = async (email, mensaje) => {
    const transporter = nodemailer.createTransport({
      service: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: 'franpvp.98@gmail.com',
        pass: 'eepc tokz rjtp lske'
      }
    });
const mailOptions = {
    from: 'franpvp.98@gmail.com',
    to: 'franpvp.98@gmail.com',
    subject: 'Nuevo mensaje de contacto',
    text: `Correo: ${email}\nMensaje: ${mensaje}`
    };

    try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado:', info.response);
    return true;
    } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    return false;
    }
};

app.get("/api/v1/users", (req, res) => {
    const users = [
        {id: 1, name: "John Wick"},
        {id: 2, name: "Javier Milei"}
    ];

    return res.status(200).json({ users });
});

app.listen(3001, () => {
    console.log("App listening on port 3000!");
});


// NodeMailer
app.post('/enviar-correo', async (req, res) => {
    const { email, mensaje } = req.body;
    console.log(body);
  
    // const enviado = await sendEmail(email, mensaje);
  
    if (enviado) {
      res.status(200).send('Correo electrónico enviado con éxito');
    } else {
      res.status(500).send('Error al enviar el correo electrónico');
    }
  });