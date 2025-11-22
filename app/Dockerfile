FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# --- LÍNEA NUEVA PARA FORZAR LA COPIA ---
COPY public ./public
# ----------------------------------------

EXPOSE 3000
CMD [ "node", "index.js" ]