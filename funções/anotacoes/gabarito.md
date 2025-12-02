1. Função que retorna o dobro de um número
function dobro(n) {
    return n * 2;
}

console.log(dobro(5)); // 10


✔ Simples e direto: pega o número, multiplica e retorna.

2. Função de boas-vindas
function boasVindas(nome) {
    return `Bem-vindo, ${nome}!`;
}

console.log(boasVindas("Mateus"));


✔ Usa template string para deixar mais limpo.

3. Função que retorna o maior de dois números (sem Math.max)
function maior(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maior(10, 7)); // 10


✔ Lógica básica de comparação.

4. Função que soma todos os valores de um array
function somaArray(arr) {
    let soma = 0;

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    return soma;
}

console.log(somaArray([1, 4, 5])); // 10


✔ Sem reduce, só lógica pura.

5. Função que diz se um número é par ou ímpar
function parOuImpar(n) {
    return n % 2 === 0 ? "par" : "ímpar";
}

console.log(parOuImpar(7)); // "ímpar"


✔ Uso de operador ternário para deixar mais elegante.

6. Função que calcula o fatorial
function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5)); // 120


✔ Implementação iterativa clássica.

7. Função que retorna um novo array filtrado (maiores que o mínimo)
function filtrar(arr, minimo) {
    let novo = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > minimo) {
            novo.push(arr[i]);
        }
    }

    return novo;
}

console.log(filtrar([1, 5, 8, 2], 4)); // [5, 8]


✔ Sem filter(), apenas lógica manual.

8. Função que conta vogais em uma frase
function contarVogais(frase) {
    let vogais = "aeiouAEIOU";
    let cont = 0;

    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            cont++;
        }
    }

    return cont;
}

console.log(contarVogais("Mateus")); // 3


✔ Usa includes para verificar se é vogal.

9. Função que gera número aleatório entre dois valores
function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numAleatorio(10, 20));


✔ Fórmula clássica para números aleatórios inteiros.

⭐ 10. DESAFIO – Função que analisa vários números (parâmetro rest)
function analisarNumeros(...nums) {

    let quantidade = nums.length;
    let soma = 0;
    let maior = nums[0];
    let menor = nums[0];
    let pares = 0;
    let impares = 0;

    for (let n of nums) {
        soma += n;

        if (n > maior) maior = n;
        if (n < menor) menor = n;

        if (n % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    let media = soma / quantidade;

    return {
        quantidade,
        soma,
        media,
        maior,
        menor,
        pares,
        impares
    };
}

console.log(analisarNumeros(5, 2, 9, 8));

✔ Resultado esperado:
{
  quantidade: 4,
  soma: 24,
  media: 6,
  maior: 9,
  menor: 2,
  pares: 2,
  impares: 2
}












--------------------------------------------------------------------



1. Contar dígitos de um número (recursivo)
function contarDigitos(n) {
    n = Math.abs(n);

    if (n < 10) {
        return 1;
    }

    return 1 + contarDigitos(Math.floor(n / 10));
}

console.log(contarDigitos(2025)); // 4


✔ Lógica: remover o último dígito recursivamente até sobrar 1 dígito.

2. Aplicar uma função a cada elemento de um array (callback)
function aplicar(arr, funcao) {
    let novo = [];

    for (let i = 0; i < arr.length; i++) {
        novo.push(funcao(arr[i]));
    }

    return novo;
}

function dobro(x) {
    return x * 2;
}

console.log(aplicar([1,2,3], dobro)); // [2,4,6]


✔ Sem usar map(), só lógica pura.

3. Função que retorna outra função (potência)
function potencia(exp) {
    return function (base) {
        return Math.pow(base, exp);
    }
}

const aoQuadrado = potencia(2);
console.log(aoQuadrado(5)); // 25


✔ Conceito importante: closure (função lembra valores externos).

4. Filtrar apenas propriedades numéricas de um objeto
function filtrarNumeros(obj) {
    let novo = {};

    for (let chave in obj) {
        if (typeof obj[chave] === 'number') {
            novo[chave] = obj[chave];
        }
    }

    return novo;
}

console.log(filtrarNumeros({nome: "Mateus", idade: 17, peso: 70}));


✔ Sem usar Object.entries().

5. Encontrar o segundo maior número sem ordenar
function segundoMaior(arr) {
    let maior = -Infinity;
    let segundo = -Infinity;

    for (let n of arr) {
        if (n > maior) {
            segundo = maior;
            maior = n;
        } else if (n > segundo && n !== maior) {
            segundo = n;
        }
    }

    return segundo;
}

console.log(segundoMaior([5,9,1,12,8])); // 9


✔ Difícil porque não pode ordenar e deve manter lógica própria.

6. Fibonacci recursivo até um limite
function fibonacci(n, seq = [0,1]) {
    let proximo = seq[seq.length - 1] + seq[seq.length - 2];

    if (proximo > n) {
        return seq;
    }

    seq.push(proximo);
    return fibonacci(n, seq);
}

console.log(fibonacci(10)); // [0,1,1,2,3,5,8]


✔ Fibonacci recursivo com array acumulativo.

7. Função que retorna outra função para autenticação
function autenticar(usuarioCorreto, senhaCorreta) {

    return function(usuario, senha) {
        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            return "Acesso permitido";
        } else {
            return "Acesso negado";
        }
    };
}

const login = autenticar("mateus", "1234");

console.log(login("mateus", "1234"));


✔ Usa closure para “guardar” usuário e senha reais.

8. Criar função de censura
function criarCensura(palavra, substituto) {

    return function(texto) {
        return texto.replaceAll(palavra, substituto);
    };
}

const censura = criarCensura("palavrão", "****");

console.log(censura("Isso é um palavrão!"));


✔ Função especializada gerada por outra função (closure).

9. Função rest + função retornada para filtrar números maiores
function criarFiltro(...numeros) {

    return function(minimo) {
        let filtrados = [];

        for (let n of numeros) {
            if (n > minimo) {
                filtrados.push(n);
            }
        }

        return filtrados;
    };
}

const filtro = criarFiltro(5,10,3,12,8);

console.log(filtro(9)); // [10,12]


✔ Mistura:

rest parameters

closure

função retornada

10. DESAFIO – Calculadora modular com histórico (usando closures)
function criarCalculadora() {
    let historico = [];

    function registrar(op) {
        historico.push(op);
        if (historico.length > 5) {
            historico.shift(); // remove o mais antigo
        }
    }

    return {
        somar(a, b) {
            let r = a + b;
            registrar(`Somar: ${a} + ${b} = ${r}`);
            return r;
        },

        subtrair(a, b) {
            let r = a - b;
            registrar(`Subtrair: ${a} - ${b} = ${r}`);
            return r;
        },

        multiplicar(a, b) {
            let r = a * b;
            registrar(`Multiplicar: ${a} * ${b} = ${r}`);
            return r;
        },

        dividir(a, b) {
            if (b === 0) return "Erro: divisão por zero.";
            let r = a / b;
            registrar(`Dividir: ${a} / ${b} = ${r}`);
            return r;
        },

        historico() {
            return [...historico]; // retorna uma cópia
        },

        limpar() {
            historico = [];
        }
    };
}

const calc = criarCalculadora();

console.log(calc.somar(5, 3));  
console.log(calc.multiplicar(4, 2));  
console.log(calc.historico());


✔ Conceitos de alto nível:

encapsulamento com closure

objeto retornado

histórico limitado

métodos independentes mas compartilhando memória interna