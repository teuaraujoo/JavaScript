function converte (valor){
    return Number(valor.replace(',', '.'));
}

let num = converte(prompt('Digite um número:'));

alert(`Anteccessor: ${num - 1}`);
alert(`Sucessor: ${num + 1}`);
alert(`Dobro: ${num * 2}`);
alert(`Triplo: ${num * 3}`);
alert(`Raiz Quadrada: ${Math.sqrt(num).toFixed(2)} `);