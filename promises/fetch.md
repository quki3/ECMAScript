# fetch 
## La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
## Fetch también aporta un único lugar lógico en el que definir otros conceptos relacionados con HTTP como CORS y extensiones para HTTP.
```javascript
  fetch('https://ruta')
    .then(response => response.json())
                              .text()
    .then(data => console.log(data))
```
## Tambien podemos enviar la peticion que enviando
```javascript
  fetch('https://ruta', {
    method:'GET', //? nos permite cambiar el tipo de llamado que nosotros estamos utilizando GET\POST\PUT\DELETE
    mode:'cors', //? podemos indicar que vamos a hacer us de cors
    cache:'no-cache',//? podemos indicar que no queremos que el esplorador me devuelva el cache
    credentials: 'same-origin,//? le podemos indicar si queremos utilizar credenciales a la hora de estar conectandonos con el servidor
    headers:{
      'content-type':'application/json'
    }//? son tipo de datos que podemos agregar con cada peticion podemos agregar un id para poder identificar al usuario en el servidor tambien podemos indicar el tipo de contenido que nosotro queremos
    redirect:'follow', //? si queremos ser redirigidos cuando conectemos al servidor ya que si el servidor nos mando a otra pagina web le indicamos qu elops sigua
    body: JSON.stringify({user:'askdjfh', password:'aksjdf'})
  })
    .then(response => response.json())
                              .text()
    .then(data => console.log(data))
```
