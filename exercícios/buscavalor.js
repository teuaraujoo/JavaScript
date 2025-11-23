/*
## **9) Arrays – Buscar Valor**

Com o array:

```javascript
let alunos = ['Ana', 'Lucas', 'Mateus', 'Jorge'];
```

Peça um nome ao usuário e diga se ele está dentro do array.

*/

let nomes = ['Ana', 'Lucas', 'Maria', 'Mateus'];

let acesso = prompt('Digite um nome: ');

if (nomes.includes(acesso)) {
    console.log(`O nome "${acesso}" ESTÁ na lista!`);
} else {
    console.log(`O nome "${acesso}" NÃO ESTÁ na lista.`);
}
