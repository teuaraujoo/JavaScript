1) Inverter uma palavra na mão
let palavra = "javascript";
let invertida = "";

// começamos do último índice até o primeiro
for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i]; // adiciona cada letra ao contrário
}

console.log(invertida); // "tpircsavaj"

2) Contar vogais e consoantes
let frase = "Programar é maravilhoso!";
let vogais = 0;
let consoantes = 0;
let listaVogais = "aeiouAEIOU";

for (let i = 0; i < frase.length; i++) {
    let char = frase[i];

    if (listaVogais.includes(char)) {
        vogais++;
    } else if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
        consoantes++;
    }
}

console.log(`Vogais: ${vogais}`);
console.log(`Consoantes: ${consoantes}`);

3) Produto dos números até N
let n = 6;
let produto = 1;

for (let i = 1; i <= n; i++) {
    produto *= i; // multiplica todos os números até n
}

console.log(produto); // 720

4) Encontrar o segundo maior número (sem sort)
let nums = [5, 12, 7, 3, 20, 9, 15, 1];
let maior = -Infinity;
let segundoMaior = -Infinity;

// encontra o maior primeiro
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maior) {
        maior = nums[i];
    }
}

// encontra o segundo maior
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > segundoMaior && nums[i] !== maior) {
        segundoMaior = nums[i];
    }
}

console.log("Maior:", maior);
console.log("Segundo maior:", segundoMaior);

5) Verificar se um número é primo
let numero = 29;
let divisores = 0;

// tenta dividir por todos os números até ele mesmo
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores++;
    }
}

if (divisores === 2) {
    console.log(`${numero} é primo`);
} else {
    console.log(`${numero} NÃO é primo`);
}

6) Gerar N termos da sequência de Fibonacci
let n = 10;
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

7) Maior palíndromo do array
let palavras = ["ovo", "radar", "javascript", "arara", "ana"];
let maiorPalindromo = "";

function ehPalindromo(p) {
    let invertida = "";
    for (let i = p.length - 1; i >= 0; i--) {
        invertida += p[i];
    }
    return p === invertida;
}

for (let i = 0; i < palavras.length; i++) {
    if (ehPalindromo(palavras[i])) {
        if (palavras[i].length > maiorPalindromo.length) {
            maiorPalindromo = palavras[i];
        }
    }
}

console.log("Maior palíndromo:", maiorPalindromo); // arara

8) Potência manual (sem Math.pow)
let base = 3;
let expoente = 4;
let resultado = 1;

// multiplica a base por ela mesma expoente vezes
for (let i = 0; i < expoente; i++) {
    resultado *= base;
}

console.log(resultado); // 81

9) Soma dos dígitos de um número
let numero = 4931;
let texto = String(numero);
let soma = 0;

for (let i = 0; i < texto.length; i++) {
    soma += Number(texto[i]); // soma cada dígito
}

console.log(soma); // 17

10) 🚀 DESAFIO SUPREMO – Detectar padrão da sequência
let arr = [2, 4, 6, 8, 10];
let crescente = true;
let decrescente = true;
let constante = true;

// compara cada número com o próximo
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
        decrescente = false;
        constante = false;
    } else if (arr[i] > arr[i + 1]) {
        crescente = false;
        constante = false;
    } else {
        crescente = false;
        decrescente = false;
    }
}

if (constante) {
    console.log("A sequência é CONSTANTE");
} else if (crescente) {
    console.log("A sequência é CRESCENTE");
} else if (decrescente) {
    console.log("A sequência é DECRESCENTE");
} else {
    console.log("A sequência é ALEATÓRIA");
}
