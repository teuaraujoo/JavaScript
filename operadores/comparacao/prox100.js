function converte(valor){
    return Number(valor.replace(',', '.'));
}
const valor = 100;
let n1 = Math.abs(converte(prompt('Digite um número:')));
let n2 = Math.abs(converte(prompt('Digite outro número:')));

let calc1 = Math.abs(valor - n1);
let calc2 = Math.abs(valor -n2);

if (calc1 < calc2){
    alert(`${n1} está mais próximo de 100`);
}else if (calc2 < calc1){
    alert(`${n2} está mais próximo de 100`)
}else {
    alert('Números iguais');
}