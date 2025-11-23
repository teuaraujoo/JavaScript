/* 
## **5) Arrays – Acessando Elementos**

Dado o array:

```javascript
let numeros = [5, 8, 2, 9, 3];
```

Mostre no console:

* O primeiro elemento;
* O último elemento;
* O tamanho do array.
*/

let numeros = [5, 8, 2, 9, 3];

console.log(`Primeiro número: ${numeros[0]}`);
console.log(`Último número: ${numeros[4]}`);
console.log(`Tamanho do array: ${numeros.length}`);
console.log(numeros.sort((a, b)=> a - b));