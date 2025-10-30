# Tablero de Indicadores (Proyecto de Integración Continua)

Este es el proyecto base para la materia de Integración Continua. El objetivo es construir una aplicación web ("Tablero de Indicadores") utilizando una arquitectura moderna basada en contenedores Docker, con un enfoque en la automatización y el despliegue continuo.

En esta primera fase, hemos establecido la infraestructura fundamental: un backend de Node.js y una base de datos MySQL, ambos ejecutándose y comunicándose exitosamente como contenedores Docker.

---

## Herramientas Utilizadas

* **Backend:** Node.js (con Express.js)
* **Base de Datos:** MySQL 8.0
* **Contenerización:** Docker
* **Orquestación:** Docker Compose

---

## Prerrequisitos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu máquina local:

* [Git](https://git-scm.com/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (¡asegúrate de que esté en ejecución!)

---

## Instalación y Ejecución

Este proyecto está diseñado para ser ejecutado con un solo comando. Sigue estos pasos:

**1. Clonar el Repositorio**
Abre tu terminal y clona este proyecto en tu computadora:

git clone [https://github.com/Giovannyrojas9999/tablero-indicadores.git](https://github.com/Giovannyrojas9999/tablero-indicadores.git)

2. Navegar a la Carpeta Entra al directorio que acabas de clonar:


cd tablero-indicadores
3. Levantar los Contenedores Usa Docker Compose para construir las imágenes y levantar todos los servicios (la app y la base de datos) al mismo tiempo:


docker-compose up --build


Docker se encargará de:

Construir la imagen de la aplicación Node.js (tablero-app).

Descargar la imagen oficial de MySQL (tablero-db).

Crear una red interna para que ambos contenedores se comuniquen.

Esperar a que la base de datos esté "saludable" antes de iniciar la aplicación.

Cómo Verificar que Funciona
Una vez que los contenedores estén corriendo, puedes verificar que todo funciona correctamente:

1. Prueba la Aplicación (Backend): Abre tu navegador web y ve a la siguiente dirección:

http://localhost:3000

Deberías ver el mensaje: ¡El tablero de indicadores está funcionando!

2. Prueba la Conexión a la Base de Datos: Ahora, prueba la ruta de conexión. Ve a esta dirección en tu navegador:

 http://localhost:3000/test-db

Deberías ver el mensaje que confirma la conexión y la consulta (SELECT 1+1): La respuesta de la BD es: 2

Si ves ambos mensajes, ¡la arquitectura está funcionando perfectamente!
