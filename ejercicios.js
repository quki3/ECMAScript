//# Javascript.__GB__
//logic code

//# ejercicio 9 crear variables con la sentencia var

var numero;
var x,y;
var a=1,b='javascript';
numero = 7;

typeof(numero)//? number
nunero = '7'
typeof(numero)//? string

//# ejercicio numero 10: declarar una funcion usando la instruccion function

function sumar(a,b){
    var suma = a + b;
    return suma
}
sumar(1+1)//? 2
/
// # ejercicio 11: resolver ploblemas de referencia de variables
 // -Error tipico
  //-ReferenceError:<<identificador>> is not defined

  var numero = 7;
  function mostrarSaludo(){
      var mensaje = 'hola... Este codigo se ejecuta en una funcion'
      console.log(numero)//? 7 <<encuentra la variable numero porque var declara una variable como global en su scoup>>
      console.log(mensaje)//? 'hola... Este codigo se ejecuta en una funcion'
  }
  console.log(mensaje)//? ReferenceError: mensaje is not defined
  

// ejercicio 12: Estudiar el comportamiento del alcance o contexto funcional.

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

  // ejercicio 13: creacion de una constante con la sentencia const.
  

  var nombre = 'Edward';
  let lenguaje = 'javaScript;
  const PI = '3.141592';
  
  nombre = 'Edward Ortiz';
  lenguaje = 'JavasScript ES6'
  PI = 3.1415//? typeError: Assignment to constant variable.
 
  //# Ejercicio 14: crear y usar literales de diferentes tipos de datos.
  
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
  
 
  //# ejercicio 15 : crear  instancias de objetos por medio de constructores.
  
    new String('javaScript')//? string{"javascript}
    [2,3,5,11]//? (5)[2,3,5,11]
    function restar(a,b){return a - b;}
    restar(2,3);//? -1
    let restarFn = new function('a','b','return a - b');
    restarFn(2,3);//? -1
    let persona = {id:1,nombre:'juan'};//? {id:1,nombre:'juan'}
    persona = new Object();//? {}
    persona.id = 1//? {id:1}
    persona.nombre = 'juan' //? {id:1,nombre: 'juan'}
    
  
   //# Ejercicio 16 :validar si una variable tiene un valor asignado.
    
   
                let a;
                let b = 11;

                if(a === undefined){
                    console.log('La variable `a` aun no tiene un valor asignado.')//? 'La variable `a` aun no tiene un valor                asignado.'
                }
                a = 'javascript'

                if(a === undefined){
                    console.log('la variable `a` aun no tiene un valor asignado')
                }else{
                    console.log('La variable a tiene un valor asignado')//? 'La variable a tiene un valor asignado'
                }
   
   // # ejercicio 17 determinar si una variable ha sido declarada con la funcion typeof

   
    let a;
    let b=11;

    console.log(typeof a);
    console.log(typeof b);

    if(typeof a === 'undefined'){
      console.log("la variable a ni tiene asignado un valor")
    }else{
      console.log("la variable a tiene asignado un valor")
    }

    if(typeof b === 'undefined'){
      console.log("la variable a ni tiene asignado un valor")
    }else{
      console.log("la variable a tiene asignado un valor")
    }
   
   // # ejercicio 18 comprovemos si una funcion retorna cvalor


    function function1(){
      return;
    }

    function function2(){
      const A = 3;
    }
    function function3(){
      return 2 + 2;
    
    }
    function function4(){
      return true;
    }
    function function5(){
      return {};
    }
    
    let fn1 = function1();
    console.log(fn1)
    let fn2 = function1();
    console.log(fn2)
    let fn3 = function1();
    console.log(fn3)
    let fn4 = function1();
    console.log(fn4)
    let fn5 = function1();
    console.log(fn5)
    
    if(fn1===undefined){
      console.log("no retorna")
    }else{console.log("retorna")}
    if(fn2===undefined){
      console.log("no retorna")
    }else{console.log("retorna")}
    if(fn3===undefined){
      console.log("no retorna")
    }else{console.log("retorna")}
    if(fn4===undefined){
      console.log("no retorna")
    }else{console.log("retorna")}
    if(fn5===undefined){
      console.log("no retorna")
    }else{console.log("retorna")}

  
  
