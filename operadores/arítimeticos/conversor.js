function converte(valor){
    return Number(valor.replace(',', '.'));
}

let valor = converte(prompt('Digite o valor em metros:'));

let cm = valor * 100; 
let mm = valor * 1000;

alert(`Valor em centímetros: ${cm}`);
alert(`Valor em milímetros: ${mm}`);