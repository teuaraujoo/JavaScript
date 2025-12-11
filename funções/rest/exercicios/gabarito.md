1. Soma simples com rest
function soma(...numeros) {
  let total = 0;

  for (let n of numeros) {
    total += n;
  }

  return total;
}

console.log(soma(2, 4, 6)); // 12

2. Função que retorna o maior número
function maiorNumero(...numeros) {
  return Math.max(...numeros);
}

console.log(maiorNumero(10, 55, 3, 90)); // 90

3. Concatenar palavras
function frase(...palavras) {
  return palavras.join(" ");
}

console.log(frase("Aprender", "JavaScript", "é", "legal!"));

4. Média de valores
function media(...valores) {
  let total = 0;

  for (let v of valores) {
    total += v;
  }

  return total / valores.length;
}

console.log(media(5, 7, 9)); // 7

5. Filtrar apenas números
function somenteNumeros(...args) {
  let numeros = [];

  for (let item of args) {
    if (typeof item === "number") {
      numeros.push(item);
    }
  }

  return numeros;
}

console.log(somenteNumeros(1, "oi", true, 5, "js", 9)); // [1, 5, 9]

6. Criar objeto com hobbies usando rest
function criarPessoa(nome, idade, ...hobbies) {
  return {
    nome,
    idade,
    hobbies
  };
}

console.log(criarPessoa("Mateus", 17, "basquete", "programar", "games"));

7. Multiplicar todos os valores por um fator
function multiplicar(fator, ...numeros) {
  let resultado = [];

  for (let n of numeros) {
    resultado.push(n * fator);
  }

  return resultado;
}

console.log(multiplicar(3, 2, 5, 7)); // [6, 15, 21]

8. Misturar arrays
function unirArrays(...arrays) {
  let resultado = [];

  for (let arr of arrays) {
    resultado.push(...arr); // spread dentro do push
  }

  return resultado;
}

console.log(unirArrays([1, 2], [3, 4], [5, 6]));

9. Contar tipos dos argumentos
function contarTipos(...args) {
  const contagem = {};

  for (let item of args) {
    let tipo = typeof item;

    if (!contagem[tipo]) {
      contagem[tipo] = 0;
    }

    contagem[tipo]++;
  }

  return contagem;
}

console.log(contarTipos(1, "oi", true, 55, "js"));

🔥 10. DESAFIO – Sistema de validação dinâmica
function validarObjeto(obj, ...regras) {
  const resultado = {};

  for (let regra of regras) {
    switch (regra) {
      case "temNome":
        resultado.temNome = obj.hasOwnProperty("nome");
        break;

      case "maiorDeIdade":
        resultado.maiorDeIdade = obj.idade >= 18;
        break;

      case "temEmail":
        resultado.temEmail = obj.hasOwnProperty("email");
        break;

      default:
        resultado[regra] = "Regra não reconhecida";
        break;
    }
  }

  return resultado;
}

// Exemplo de uso:
const pessoa = {
  nome: "Mateus",
  idade: 17,
  email: "mateus@gmail.com"
};

console.log(
  validarObjeto(pessoa, "temNome", "maiorDeIdade", "temEmail")
);