function converte(valor){
    return Number(valor.replace(',', '.'));
}

let num = converte(prompt('Digite um número:'));

if(num % 3 == 0 && num % 5 == 0){
    alert('Multiplo de 3 e 5')
} else if(num % 3 == 0){
    alert('Múltiplo de 3');
} else if(num % 5 == 0){
    alert('Múltiplo de 5');
}else {
    alert('Nem múltiplo de 3, nem de 5');
} 

// ou pode ser assim, utilizando Não(condição), representado pelo !
// else if (!(num % 3 == 0) && !(num % 5 == 0)) {
//     alert('Nem multiplo de 3, nem de 5');
// }
