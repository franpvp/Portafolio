// mailer.js
const nodemailer = require('nodemailer');

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

module.exports = sendEmail ;
