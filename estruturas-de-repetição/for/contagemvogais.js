let vogais = 'aeiou';
let quantV = 0;
let quantC = 0;

let frase = prompt('Digite uma frase: ');

for (i = 0; i < frase.length; i++){
    let char = frase[i].toLowerCase();

    if (vogais.includes(char)){
        quantV++;
    } else {
        quantC++;
    }
}

console.log(quantV);
console.log(quantC);