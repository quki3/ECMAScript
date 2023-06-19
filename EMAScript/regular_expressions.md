# regexp
- Basic syntax
`'/hello/'`// for match the string hello
//examples
```js
cosnt str = "The quick brown fox jumps over the lazy dog"
const pattern = /q/;
const result = pattern.test(str);
console.log(result);//true
```


- flags
`g` (global match)
`i` (case insensitive)
`m` (multiline match)

- regular expression methods 
`test(),match(),search(),replace(),split()`
-Metacharacters
`.`(matches any character)
`*`(matches zero or more of the preceding character)
`?`(matches zero or one of the preceding character)
`$`(matches the and of a line)
`[]`(matches any character in the brackets)
- character classes
- `[a-z]` matches any lowercase letter
- `[0-9]` matches any digit

