# Usa la imagen base de nginx, un servidor web ligero y eficiente
FROM nginx:alpine

# Copia los archivos estáticos al directorio de Nginx para ser servidos
COPY . /usr/share/nginx/html

# El puerto 80 ya está expuesto por la imagen de Nginx, por lo que no necesitas la instrucción EXPOSE

# Construimos la aplicación y ejecutamos los comandos en la terminal 
# docker build -t mi-aplicacion-web . 
# docker run --name mi-app-web -d -p 8080:80 mi-aplicacion-web
