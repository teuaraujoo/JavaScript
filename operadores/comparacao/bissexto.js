let ano = Number(prompt('Digite o ano:'));

if (ano % 4 == 0){
    alert('ANO BISSEXTO');
}else if (ano % 100 == 0 && ano % 400 == 0){
    alert('ANO BISSEXTO');
} else {
    alert('ANO COMUM');
}