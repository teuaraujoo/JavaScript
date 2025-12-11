// maior Numero 

function maiorNumero(...valores){
    let maior = -Infinity;
    for (v of valores){
        if (v > maior){
            maior = v;
        }
    }
    return `O maior número é ${maior}`;
}

console.log(maiorNumero(1, 2, 3, 10, 24, 6));