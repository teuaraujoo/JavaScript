function converte(valor){
    return Number(valor.replace(',', '.'));
}

let n1 = converte(prompt('Digite sua 1° nota:'));
let n2 = converte(prompt('Digite sua 2° nota:'));

if (n1 == n2){
    alert('As notas são iguais');
} else if (n1 > n2){
    alert('Sua primeira nota foi maior');
} else{
    alert('Sua segunda nota foi maior');
}

