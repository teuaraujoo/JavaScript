// Crie uma função chamada analisarNumeros() que:
// receba quantos números o usuário quiser (parâmetro rest)
// retorne um OBJETO com:
// a quantidade de números
// a soma de todos
// a média
// o maior
// o menor
// quantos são pares
// quantos são ímpares

function analisarNumeros(arr){
    let s = 0;
    let media = 0;
    let maior = -Infinity;
    let menor = Infinity;
    let par = 0;
    let imp = 0;
    
    
    for(i = 0; i < arr.length; i++){

        s = s + arr[i];

        if (maior < arr[i]){
            maior = arr[i];
        } 
        if (arr[i] < menor){
            menor = arr[i];
        }

        if (arr[i] % 2 == 0){
            par++;
        } else {
            imp++;
        }
    }
    media = s / arr.length;

    obj = {
        quantidade: arr.length,
        soma: s,
        media: media,
        maior: maior,
        menor: menor,
        pares: par,
        impares: imp
    }

    return obj;
}

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(analisarNumeros(numbers1));






//FIXME: Lembre-se ==> if + if (soma) / if else if (se nao aquilo faca isso com condicao) / if else (se nao aquilo faca isso)


// -----------------------------------------------------------------------------------------


//FIXME: Quando usar o null

// Use null quando você quer representar ausência de valor, algo que:
// Ainda não existe; Ainda não foi determinado; Está vazio propositalmente

// Não use null quando a variável será usada para fazer cálculos.


// -----------------------------------------------------------------------------------------


//FIXME: Infinity

//O valor Infinity (positivo) é maior do que qualquer outro número. 

// Porque usar infinity no menor = Porque qualquer número do array será menor que ele, garantindo assim que a 1° comparação dê um "canditado" a ser o menor número.

// O valor -Infinity no maior = Porque qualquer número do array será maior que ele, garantindo assim que a 1° comparação dê um "canditado" a ser o maior número.

// Todo número é menor que Infinity
// Todo número é maior que -Infinity



// -----------------------------------------------------------------------------------------



// Maior / Menor - (esclarecer dúvidas do desafio acima)

let t = [0, 1, 2, 3, , 4, 10, 21, 0, 5, -5]
let m = -Infinity;
let menor = Infinity;

for (i = 0; i < t.length; i++){
    if (m < t[i]){
        m = t[i];
    } else if  (t[i] < menor){
        menor = t[i];
    }
}

console.log(m, menor);