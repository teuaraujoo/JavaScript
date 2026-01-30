function contagem(num, soma = 0){
    
    soma += num;

    if (num === 0){
        console.log('SOMA IGUAL A ' + soma);
        return;
    } 
    if (num > 0){
        num--;
    }
    if (num < 0){
        num++;
    }
    console.log(num);
    contagem(num, soma);
};

contagem(10);