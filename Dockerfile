# Utiliza una imagen de Node.js como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos y las dependencias de la aplicación Next.js
COPY client/app/package.json client/app/package-lock.json ./
RUN npm install

# Copia los archivos del servidor Node.js
COPY server/package.json server/package-lock.json ./
RUN npm install

# Copia el resto de los archivos de la aplicación Next.js
COPY client/app .

# Compila la aplicación Next.js para producción
RUN npm run build

# Expone el puerto 3000 para Next.js y cualquier otro puerto que tu servidor Node.js utilice
EXPOSE 3000

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
