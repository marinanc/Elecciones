SOFTWARE UTILIZADO:
- MongoDB v4.4
- Windows 10 x64
- Visual Code v1.49.4
- Robo 3T v1.3.1

PASOS:
1- En una nueva temrinal ir a la carpeta 'server' y ejecutar 'npm install':
cd server
server> npm install

2- En una nueva terminal ir a la carpeta 'data' y ejecutar el archivo 'startmongo.bat':
cd data
data> startmongo.bat

3- En una nueva terminal ir a la carpeta 'server'(o en la terminal que ya está en la carpeta 'server')
y ejecutar el proyecto:
cd server
server> npm start

4- (Solamente la primera vez que se ejecuta el proyecto)
En Robo 3T, agregar los datos de candidatos.json a la colección candidatos de la BD elecciones

5- En browser dirigirse a la URL localhost:3000

ACLARACIONES:
a- No se utilizó mongoimport porque MongoDB v4.4 no trae esa herramienta, hay que
instalarla por separado. (Viene incluida hasta MongoDB v4.2)
b- Las imágenes de los candidatos fueron convertidas de jpg a base64 para guardarlas en la BD
Se convirtió con la página web: https://www.base64-image.de
c- La cantidad de votos por candidato no se inicializó en 0 con la finalidad de probar
la página de estadísticas sin tener que registrar varios votos.


MIS DATOS
Nombre: Marina Natalia Carrizo
e-mail: marinancarrizo@gmail.com