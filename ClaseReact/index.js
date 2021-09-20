Antes de ver estos ejemplos está bueno entender qué es código síncrono y asíncrono y cómo nos ayudan las promesas a trabajar 
con esto. El código síncrono es aquel que se ejecuta en el mismo orden en que es declarado, si por ejemplo tuvieran muchos 
console.log seguidos se ejecutarían en el orden en que los declaran. Ahora, en el medio de los console.log pueden tener una 
función asíncrona (que se ejecuta una vez hayan terminado de hacerse todos los console.log). Esta función pasará a una cola 
secundaria de ejecución la cual comenzará a ejecutar todas las funciones asíncronas que tenga dentro (en el mismo orden que 
fueron declaradas). Entonces, código asíncrono es el que va a tardar un tiempo en ejecutarse, puede ser mucho o poco pero 
como no lo sabemos utilizamos las promesas para que, una vez devuelva algo, podamos manipular esa respuesta. 
Antes se trabajaba todo esto con callbacks, el problema era que generaban un anidamiento horrible de funciones. Por eso nacen 
las promesas, para ordenar un poco las cosas. Async/await es otra manera de trabajar código asíncrono, un poco más prolijo 
incluso que las promesas pero ambas opciones son válidas. No confundan fetch con promesas, sepan que fetch trabaja con promesas 
por detrás y que devuelve una por eso usamos .then para poder acceder a la respuesta que nos de la api.
*/

fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola")
.then(response => response.json())
.then(data => data.results)
.then(products => products.map(product => console.log(product.title)));

/*
- con fetch hacemos la peticion get a una api (la cual esta preparada para devolver información) 
- fetch trabaja con promesas por lo tanto para acceder a esa información necesitamos utilizar .then 
- then recibe un parámetro (que pueden ponerle el nombre que quieran) el cual contiene la respuesta de la api (osea los datos) 
- el primer then se usa para convertir los datos que devuelve la api a json y poder manipularlos 
- el segundo then captura esos datos convertidos (data) y accede a results que es un array con la información de los productos 
- podemos anidar la cantidad de then que querramos para ordenar mejor el código. El tercer then recibe ese array de productos 
y los mapea para mostrar el título de cada uno
*/



async function traerDatos () {
  let response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola");
  let data = await response.json()
  console.log(data)
}

traerDatos()

/*
- declaramos una función async, esto significa que se va a ejecutar una vez termine de correr todo el resto del código del archivo 
- hacemos un fetch a la api pero colocando await por delante, esto significa que el código dentro de esta función no se seguirá 
ejecutando hasta que este fetch se complete y devuelva la información de los productos 
- una vez nos devuelva los datos, los convertimos a json. También utilizamos await para que el console.log no se ejecute hasta 
que la petición esté completa y convertida a json 
- a la variable data podríamos hacerle el map (como hicimos antes) y obtener el título de los productos
*/



new Promise ((resolve, reject) => {
  setTimeout(() => reject("No anda"), 1000)
})
.then(data => console.log(data))
.catch(err => console.log(`Estoy en el catch ${err}`))

/*
- creamos una promesa con new Promise. Las promesas reciben un callback el cual acepta dos parámetros. Ustedes pueden ponerle el 
nombre que quieran, en este caso para ser más claros le asignamos resolve y reject (no importa la palabra que usen sino que 
pongan los dos). 
- dentro de la promesa declaramos un setTimeout que sirve para ejecutar código después de un determinado tiempo. Una vez pase el 
segundo declarado (en milisegundos) se seguirá corriendo el código
- una promesa puede salir resuelta o rechazada. Con el primer parámetro del callback (resolve en este caso) forzamos a la promesa 
a que salga resuelta y con el segundo (reject) forzamos a que salga rechazada
- en el then se trabaja el código cuando la promesa es resuelve correctamente. Significa que si no hubo ningún problema en el 
medio, la ejecución del código continuará en el then. Si hubiera habido un error y la promesa es rechazada, el código que se 
ejecutaría a continuación es el que pongamos en el catch
- en este caso formzamos un reject para que se ejecute el código dentro del catch
- si cambiamos el reject por el resolve, entraría al then y podrían anidar la cantidad de then que quieran
*/



// operador rest, rest operator
function cualquiera (a, ...datos) {
  // [2, 3, 4, 5, 6, 7, 8, 9, 10, "Datos", {name:"Ale"}]
  console.log(datos)
  let sumatoria = datos.reduce((valorAnterior, valorSiguiente) => {
    return valorAnterior + valorSiguiente
  }, 0)
  console.log(sumatoria)
}

cualquiera(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Datos", {name:"Ale"})

/*
- el rest operator es una manera de poder aceptar n cantidad de parámetos en una función, significa que no importa que a la hora 
de ejecutarla le pasemos 1, 2 o 34 parámetros porque todos van a ser capturados por el rest operator
- como se ve en este ejemplo, la sintaxis es poner tres puntos delante de una variable
- en este caso agregamos un parámetro aislado del rest operator porque así se haría en caso que necesitemos utilizar el primer 
parámetro que le enviamos a la función sin que quede guardado en el array que genera el rest operator
- entonces, datos es un array con todos los parámetros que le enviamos excepto el primero (porque lo sacamos del rest operator 
al declararlo aparte como a) 
- como sabemos que datos es un array, podríamos recorrerlo para acceder a sus valores. En este caso vemos que utilizamos reduce 
el cual es un método de array (como map, filter, find, some, etc) que se encarga de hacer una sumatoria
- si corren ese código tal cual está no les va a funcionar porque le estamos pasando un string y un objeto como parámetros por 
lo tanto no va a poder sumarlos. Si le sacan estas dos cosas, funciona y les devuelve el resultado de 2 + 3 + 4 + 5 + 6 + 7 + 8 
+ 9 + 10
- reduce toma por parámetro dos cosas: un valor viejo o inicial y un valor nuevo o siguiente. Lo que hace es sumarlos en cada 
iteración tomando como valor inicial por default cero (si queremos usar cero no hace falta colocarlo porque es el default pero 
si quisieramos cambiarlo deberíamos colocarlo antes de cerrar el reduce, en este caso lo dejamos puesto para que se entienda 
donde hay que ponerlo)
- la primer iteración reemplazará el valor inicial por cero y el siguiente por la primer posición del array. En este caso estamos 
sumando ambos valores por lo tanto ese resultado lo guardará internamente y lo reemplazará en la siguiente iteración por valor 
inicial y colocará en valor siguiente la segunda posición del array. Hará la suma y el resultado lo guardará para ponerlo como 
valor inicial en la tercer vuelta y así hasta recorrer todo el array. 
*/



// spread operator
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [7, 8, 9]
let copiaArray1 = [...array1, ...array2, ...array3]

console.log(copiaArray1);

let objeto1 = {name: "Ale"}
let objeto2 = {...objeto1}

objeto2.edad = 24

console.log(objeto1)
console.log(objeto2)

/*
- spread operator tiene muchas funciones, realmente las más conocidas o usadas son la de copiar un array y un objeto. Es importante 
destacar que copia una instancia por lo tanto si modifico la copia no modifico el original. 
- La sintaxis son los tres puntitos seguidos del array u objeto que se quiera copiar. Corran este código para ver los console.log así 
se entiende bien
- acá le agregamos una nueva key al objeto2 para demostrar que aunque lo modifiquemos no vamos a modificar el objeto1 porque creamos 
una copia de sus elementos, por eso es buena opción usar spread operator para este tipo de situaciones