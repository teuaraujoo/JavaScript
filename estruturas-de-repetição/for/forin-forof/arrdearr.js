// percorrendo matriz

const matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (m in  matriz){
    let valores = matriz[m];
    for(v of valores){
        console.log(v);
    }
}

// somador de vendas

const vendas = {
    janeiro: [10, 20, 30],
    fevereiro: [5, 10],
    marco: [40, 10, 20]
};

let soma = 0;
for(meses in vendas){
    let valores = vendas[meses];
    for(v of valores){
        soma += v;
    }
}

console.log(soma);

// contador de caracteres

let palavras = ["javascript", "programacao", "matheus", "computador"];


function contadorCaracteres(arr){
    const obj = {};
    for(palavra of arr){
        obj[palavra] = palavra.length;
    }
    return obj;
}

console.log(contadorCaracteres(palavras));

// quantidade de caractere

let palavrass = ["javascript", "javascript", "javascript", "javasscript"];
function quantCaractere(arr){

    const tamanho = arr[0].length;

    for(palavra of arr){
        if(palavra.length != tamanho){
            return false;
        }
    }
    return true;
}

console.log(quantCaractere(palavrass));