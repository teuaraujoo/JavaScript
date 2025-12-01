let x = [];

for (i = 0; i < 10; i++){
        x[i] = Number(prompt('Digite um número:'));
}
    
console.log(x);

let tipo = '';

let Decrescente = true;
let Crescente = true;
let Constante = true;

for (i = 0; i < x.length - 1; i++){
    
    if (x[i] < x[i + 1]){
        Decrescente = false;
        Constante = false;
    } else if (x[i] > x[i + 1]){
        Constante = false;
        Crescente = false;
    } else if (x[i] === x[i + 1]){
        Crescente = false;
        Decrescente = false;
    }
}

if (Crescente) {
    tipo = 'Crescente'
} else if (Decrescente){
    tipo = 'Descrescente';
} else if (Constante){
    tipo = 'Constante'
} else {
    tipo = 'Aleatório'
}

console.log(tipo);