# Utiliza una imagen de Node.js como base
FROM node:alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app/client

# Copia los archivos y las dependencias de la aplicación Next.js
COPY client/app/package.json client/app/package-lock.json ./
RUN npm install --production

# Copia el resto de los archivos de la aplicación Next.js
COPY client/app .

# Compila la aplicación Next.js para producción
RUN npm run build

# Establece el directorio de trabajo para el servidor
WORKDIR /app/server

# Copia los archivos del servidor Node.js
COPY server/package.json server/package-lock.json ./
RUN npm install --production

# Copia el resto de los archivos del servidor
COPY server .

# Expone el puerto 3000 para Next.js y cualquier otro puerto que tu servidor Node.js utilice
EXPOSE 3000

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
