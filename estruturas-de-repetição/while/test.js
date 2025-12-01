
let soma = 0;
let anterior = null;

while (true) {
    let entrada = Number(prompt("Digite um número:"));

    if (isNaN(entrada)) {
        alert("Entrada inválida. Digite um número.");
        continue;
    }

    soma += entrada;

    if (anterior !== null && entrada === anterior) {
        alert(`Dois números iguais consecutivos detectados (${entrada}).`);
        break;
    }

    anterior = entrada;
}

alert("Soma de todos os números digitados: " + soma);