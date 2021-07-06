# Javascript.__GB__
logic code
# ejercicio 9 crear variables con la sentencia var
```bash
var numero;
var x,y;
var a=1,b='javascript';
numero = 7;

typeof(numero)//? number
nunero = '7'
typeof(numero)//? string
```
# ejercicio numero 10: declarar una funcion usando la instruccion function
```bash
function sumar(a,b){
    var suma = a + b;
    return suma
}
sumar(1+1)//? 2
```
# ejercicio 11: resolver ploblemas de referencia de variables
  -Error tipico
  -ReferenceError:<<identificador>> is not defined
```bash
  var numero = 7;
  function mostrarSaludo(){
      var mensaje = 'hola... Este codigo se ejecuta en una funcion'
      console.log(numero)//? 7 <<encuentra la variable numero porque var declara una variable como global en su scoup>>
      console.log(mensaje)//? 'hola... Este codigo se ejecuta en una funcion'
  }
  console.log(mensaje)//? ReferenceError: mensaje is not defined
  
```
# ejercicio 12: Estudiar el comportamiento del alcance o contexto funcional.
```bash
  function funcion1(){
    var a = 2;
    
    function funcion3(){
      var b = 5;
      
      function funcion5(){
        console.log(a,b)//? 2 5 <<funcion 5 tiene alcance funcional para las variables a y b
      }
      
    }
  }
  function ficion2(){
    var a = 7;
    
    function funcion4(){
      console.log(a)//? 7
    }
  }
```
  # ejercicio 13: creacion de una constante con la sentencia const.
  
 ```bash
  var nombre = 'Edward';
  let lenguaje = 'javaScript;
  const PI = '3.141592';
  
  nombre = 'Edward Ortiz';
  lenguaje = 'JavasScript ES6'
  PI = 3.1415//? typeError: Assignment to constant variable.
 ```
  # Ejercicio 14: crear y usar literales de diferentes tipos de datos.
  ```bash
  let nombre = new String('Edward Ortiz');//? String{'Edward Ortiz'}
  let nombre = "Edward Ortiz"//? "Edward Ortiz"
  let puntaje = 1000;//? 1000
  let jugando = new Boolean(true)//? Boolean{true}
  let jugando = true//? true
  let cociente = 2/3//? 0.666666666666666
  nombre = 'Edward' + 'ortiz';//? "Edward Ortiz"
  let numeros = [2,3,4,45,5]//? (5)[2,3,4,45,5]
  let computador = {'marca':'MSi'}//? {'marca':'MSi'}
  function sumar(a,b){return a + b}
  
  ```
  https://www.youtube.com/watch?v=dMbgOWi9qUg&list=PL2PZw96yQChxuJMja3Aq--5AfBPCMc1kL&index=15
  
  
  
