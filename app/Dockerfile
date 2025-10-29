# Usamos una imagen oficial de Node.js (versión 18, ligera)
FROM node:18-alpine

# Creamos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos el package.json y package-lock.json ANTES que el resto.
# Esto aprovecha la caché de Docker y no reinstala todo si solo cambias el código.
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Ahora sí, copiamos el resto del código de la aplicación (el index.js)
COPY . .

# Exponemos el puerto 3000 (el que usa Express en tu index.js)
EXPOSE 3000

# El comando para iniciar la aplicación cuando arranque el contenedor
CMD [ "npm", "start" ]