# Practicas con Node JS
Para iniciar y ver las practicas realizadas instalaremos algunos paquetes de node:
## Instalacion de Node
Con el siguiente enlace descargaremos la version LTS de [Node](https://nodejs.org/es/)
- Nos aseguramos de que node se instalo correctamente con alguno de estos comandos desde la consola:
```bash
node -v
```
```bash
node --version
```
## Instalacion de dependencias
### dotenv
Instalaremos esta dependencia para utilizar las variables de entorno en nuestros ejercicios
```bash
npm install dotenv --saved
```
## Crear archivo de entorno
### .env
Para crear este archivo lo realizaremos mediando la consola con el siguiente comando:
```bash
touch .env
```
Ahora agregaremos las variables de entorno en el archivo creado previamente
<pre>
NAME = "YOUR NAME"
GITHUB_URL = "https://github.com/username"
</pre>

## Modulos
### filesystem
En caso querramos saber la direccion de nuestra carpeta en donde estamos trabajando podemos utilizar el siguiente comando

__Nota:__ Debes crear un archivo JS para poder visualizarlo luego en consola
- Para ver la ruta de la carpeta donde se encuentra el archivo:
    ```js
    console.log(__dirname)
    ```
- Para ver la ruta completa de donde se encuentra el archivo donde estamos trabajando:
    ```js
    console.log(__filename)
    ```