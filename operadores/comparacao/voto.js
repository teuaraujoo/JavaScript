let idade = Number(prompt('Digite sua idade:'));

if (idade === 16 || idade === 17 || idade >= 70){
    alert('Voto opcional');
    let res = prompt('Deseja votar?(s/n)');
        if (res === 's'){
            prompt('1 para Lula e 2 para Bolsonaro');
        }else {
            alert('Obrigado!')
        }
}else if (idade < 16){
    alert('Você ainda nao pode votar, menor de 16 anos!')
}else if (idade >=18 && idade <= 69){
    alert('Voto obrigatório');
    prompt('1 para Lula, 2 para Bolsonaro');
}