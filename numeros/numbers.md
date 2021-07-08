# numbers
# Math.abs()
```bash
La función Math.abs() retorna el valor absoluto/modulo de un número
sintaxis
Math.abs(x)

Parametros:
x //? Un número.
----------------------------------------------------------------
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
```
# Math.sing()
```bash
La función Math.sign() retorna el signo de un número, indicando si el número es positivo, negativo o cero.
sintaxis
Math.sing(x)
parametros
x//? Un número.
----------------------------------------------------------------------------------------------------------
Math.sign(3);     //  1
Math.sign(-3);    // -1
Math.sign('-3');  // -1
Math.sign(0);     //  0
Math.sign(-0);    // -0
Math.sign(NaN);   // NaN
Math.sign('foo'); // NaN
Math.sign();      // NaN
```
