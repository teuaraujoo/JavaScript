function converte(valor){
    return Number(valor.replace(',', '.'));
}

let nota = converte(prompt('Digite sua nota'));

if (nota >= 7){
    alert('APROVADO');
} else if (nota >= 5 && nota < 7){
    alert('RECUPERAÇÃO');
} else { 
    alert('REPROVADO');
}