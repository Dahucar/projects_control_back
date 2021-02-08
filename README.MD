# Desafío Técnico: FullStack Cadem (Servidor)

## Descrión del proyecto.
- este proyecto contiene dentro del directorio **/public** los archivos minificados del cliente escrito en React
- por lo que para probar los desafíos propuestos en la actividad puede ejecutar este proyecto de las dos formas descritas más abajo en este archivo y dirigirse a su navegador consultando la url generada [http://localhost:**PORT**/](http://localhost:**PORT**/). Que en este caso el puerto deberá añadirlo como indica las instrucción del siguiente punto
- de esta forma bastara con ejecutar este proyecto para ver el resultado final. 
- Si se desea ver el código en detalle del cliente escrito en React puede encontrarlo en el siguiente repositorio [https://github.com/Dahucar/projects_control_front](https://github.com/Dahucar/projects_control_front) donde también se detallan las instrucciones de ejecución respectivas.  


## Instrucciones de ejecución.
- Instalar módulos de Node mediante npm
    > **npm i**
- Copiar el archivo **.env.example** a **.env** donde en la clave definida deberá establecer el puerto del servicio REST deseado.
    > PORT=

### `npm start` para ejecutar el proyecto.

ejecutara el servidor para probar el servicio REST

### `npm run dev` para ejecutar el proyecto en modo desarrollo.

ejecutara el servidor en modo de desarrollo mediante nodemon, donde mediante esta dependencia se recargara el servicio cada vez que se detecte un cambio en los archivos del proyecto.