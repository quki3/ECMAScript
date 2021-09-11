# metodos
# Find()
El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```
# push()
```bash
"El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
¶>sintaxis
arr.push(element1[, ...[, elementN]])
elementN
Los elementos a añadir al final del array."
________________________________________________________________________________________________________
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

```
# sort()
```bash

```
# every
# some
# forEach
# Array.from()
# .pop()
El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
```javascript
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```
# shift() 
este metodo modifica el array y saca y debuelve el primer elemento de un array
```javascript
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```
