let maiorNumero = -Infinity;
let num1 = null;
let num2 = null;
let num3 = null;

while (!(num3 !== null && num2 > num3 && num1 > num2)) {
    let input = prompt("Digite um número (ou cancele para sair):");
    if (input === '' || isNaN(input)){
        alert("Entrada inválida. Digite um número válido.");
    } 

    let numero = parseFloat(input);

    if (!isNaN(numero)) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }

        num1 = num2;
        num2 = num3;
        num3 = numero;
    }
}

alert(`Três números decrescentes consecutivos digitados. O maior número inserido foi: ${maiorNumero} `);