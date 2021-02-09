# Desafío Técnico: FullStack Cadem (Servidor NodeJS)

## Descrión del proyecto.
- este proyecto contiene dentro del directorio **/public** los archivos minificados del cliente escrito en React
- por lo que para probar los desafíos propuestos en la actividad puede ejecutar este proyecto de las dos formas descritas más abajo en este archivo y dirigirse a su navegador consultando la url generada [http://localhost:**4350**/](http://localhost:**4350**/). Para este caso particular deberá añadir el puerto **4350** ya que es el especificado en los archivos minificados del cliente en React.
- de esta forma bastara con ejecutar este proyecto para ver el resultado final. 
- Si se desea ver el código en detalle del cliente escrito en React puede encontrarlo en el siguiente repositorio [https://github.com/Dahucar/projects_control_front](https://github.com/Dahucar/projects_control_front) donde también se detallan las instrucciones de ejecución respectivas.  
## Instrucciones de ejecución.
- Instalar módulos de Node mediante npm
    > **npm i**
- Copiar el archivo **.env.example** a **.env** donde en la clave definida deberá establecer el puerto del servicio REST deseado. Se recomienda usar el puerto **4350**, en caso de seleccionar otro deberá espesificarlo en el archivo **.env** en el proyecto cliente.
    > PORT=
### `npm start` para ejecutar el proyecto.
ejecutara el servidor para probar el servicio REST junto con el cliente escrito en React (que se encuentra en el directorio **/public**) 
### `npm run dev` para ejecutar el proyecto en modo desarrollo.
ejecutara el servidor en modo de desarrollo mediante nodemon, donde mediante esta dependencia se recargara el servicio cada vez que se detecte un cambio en los archivos del proyecto.