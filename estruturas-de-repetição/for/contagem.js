// contagem progressiva

for (i = 1; i < 11; i++){
    console.log(i);
}

// contagem regressiva

for (i = 10; i > 0; i--){
    console.log(i);
}

//  numeros pares

for (i = 20; i > -2; i -= 2){
    console.log(i);
}

// tabuada de 2

for (i = 1; i < 11; i++){
    console.log(`${i} x 2 = ${i * 2}`);
}

// tabuada dinamica

let num = 5;

ou

let num1 = Number(prompt('Digite um numero'));

for (i = 1; i < 11; i++){
    console.log(`${i} x ${num} = ${i * num}`);
}

// soma de numeros

let soma = 0;

for (i = 0; i < 101; i++){
    soma = soma + i;
}

console.log(soma);

// Acessando array

let n = [12, 24, 39, 45, 51, 14, 29, 74];

for (i = 0; i < n.length; i++){
    console.log(`n[${i}] = ${n[i]}`);
}

// contador de letras

let nome = 'Mateus'; 

ou 

let nomee = prompt('Digite uma palavra:');

let tam = 0;

for (let i = 0; nome[i] !== undefined; i++) {
    tam++;
}

console.log(tam);

// Maior numero

let numeros = [5, 12, 7, 3, 20, 9];
maior = 0;

for (i = 0; i < numeros.length; i++){
    if (maior < numeros[i]){
        maior = numeros[i];
    }
}

console.log(maior);

// Maiores que 50 

let nums = [52, 120, 70, 31, 20, 19, 59, 550, 65];
let maiorNum;

for (i = 0; i < nums.length; i++){

    if(nums[i] > 50){
        maiorNum = nums[i];
        console.log(maiorNum);  
    }
}


// inverter palavra 

let palavra = 'Mateus'.toLowerCase() // ou prompt('Digite uma palavra:').toLowerCase();
let invertido = ''

for (i = palavra.length - 1; i >= 0; i--){
    invertido += palavra[i];
}
console.log(invertido);



// contagem voagis / consoantes

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

// Maior numero pt2

let nume = [1, 4, 7, 9, 10, 14, 17, 21];
maiorN1 = 0;
maiorN2 = 0;

for (i = 0; i < nume.length; i++){
    if (maiorN1 < nume[i]){
        maiorN1 = nume[i];
    } 
}

for (i = 0; i < nume.length; i++){
    if (maiorN2 < nume[i] && nume[i] !== maiorN1){
        maiorN2 = nume[i];
    }
}

console.log(maiorN1);
console.log(maiorN2);

// potência manual

let b = 2;
let e = 3;
let calc = 1;

for(i = 0; i < e; i++){
    calc = calc * b;
}

console.log(calc);


// Soma dos dígitos de um número

let numer = 4029;
const arrayNumer = [...String(numer)].map(Number);
let c = null;

for (i = 0; i < arrayNumer.length; i++){
    c = c + arrayNumer[i];
}

console.log(c);

// Padrão array

let x = [3];
let tipo = '';

for(i = 0; i < x.length; i++){
    x = Number(prompt('Digite um numero'));
    if(x[i] < x[i + 1]){
        tipo = 'Crescente';
    } else if (x[i] > x[i + 1]){
        tipo = 'Decrescente';
    } else if (x[i] == x[i + 1]){
        tipo = 'Constante';
    }
}

console.log(tipo);