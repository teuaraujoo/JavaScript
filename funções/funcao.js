// função sempre retorna um valor/algo

// estrutura: function + nome da funcao + parâmetros () + chaves

// Quando usar  e quando não usar função? 

/*
REPETIÇAÕ DE CÓDIGO
REAPROVEITAMENTO DE LÓGICA
CÓDIGO + ORGANIZADO
CÓDIGO MAIS LIMPO/LEGÍVEL E FÁCIL DE ENTENDER 
FACILITAR ALTERAÇÕES
ORGANIZAR O CÓDIGO EM BLOCOS DE LÓGICA
/*

// Quando usar parâmetro?

/* 
Usar parâmetros ==> função precisa de um valor externo para funcionar, mas você não quer que esse valor fique fixo dentro dela.

função seja reutilizável com dados diferentes.

Nao usar parâmetros ==> Quando sua função não precisa de informação externa. Ela sempre faz a mesma coisa

FIXME: PERGUNTAS PARA SE FAZER

Minha função precisa de algum dado para funcionar?
→ Se sim → use parâmetro.

Eu quero que a função funcione com valores diferentes sem reescrever código?
→ Se sim → use parâmetro.

A função sempre fará a mesma coisa, sem depender de valores externos?
→ Se não → não precisa de parâmetro.

 */

// ex: funcao soma
function soma (a, b){
    return a + b;
}

let x = 5;
let y = 2;

console.log(soma(x, y));

// Dobro 

function dobro (valor){
    return valor *= 2;
}

let num = 32;
console.log(dobro(num));

// Retorna Mnesagem

function mensagem(nome){
    return `Boa Vindas, ${nome}!`;
}

let pessoa = 'Julio'

console.log(mensagem(pessoa));

// Maior num

function maior(a, b){
    if (a > b){
        return a;
    }else{
        return b;
    }
}

let n1 = 20;
let n2 = 15;

console.log(`O maior número é: ${maior(n1, n2)}`);

// Todos os valores

function todos (array){
    let c = null;
    let i = 0;
    while (i < array.length){
        c = c + array[i];
        i++
    }
    return c;
}

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

console.log(todos(test));

// par/impar

function parImpar (x){
    if (x % 2 == 0){
        return 'par';
    } else {
        return 'ímpar';
    }
}

let k = 122942197;

console.log(parImpar(k));

// fatorial

function fatorial (r){
    let f = 1;

    for (i = 1; i <= r; i++){
        f *= i;
    }
    // ou
    // while (r > 1){
    //     f *= r;
    //     r--;
    // }
    return f;
}

let number = 10;

console.log(fatorial(number));

// Fibonacci

function fibonacci(q){
    a = 0;
    b = 1;
    c = null;
    console.log(a);
    console.log(b);
    for (i = 1; i < q; i++){
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}

let numer = 50;
fibonacci(numer);

// recebeArray

function filtrar(arr, minimo) {
    let novo = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > minimo) {
            novo.push(arr[i]);
        }
    }

    return novo;
}

console.log(filtrar([1, 5, 8, 12, 24, 22, 54, 13, 4, 9], 10)); 

// qVogais

function qVogais (frase){
    let vogais = 'aeiou';
    let cont = 0;

    for(i = 0; i < frase.length; i++){
        let char = frase[i].toLowerCase();

        if (vogais.includes(char)){
            cont++;
        }
    }
    return cont;
}

let phrase = 'Mateus';

console.log(`Quantidade de vogais ==> ${qVogais(phrase)}`);

// aleatorio

function aleatorio (max, min){
    let ale = Math.floor(Math.random() * (max - min) + min);
    return ale;
}

console.log(aleatorio(20, 10));