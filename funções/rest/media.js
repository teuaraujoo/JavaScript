function media (...valores){
    
    let soma = 0;
    let c = 0;

    for (v of valores){
        soma += v;
        c++;
    }

    return media = soma / c
}

console.log(media(10, 20, 30, 5 , 10, 2340, 230131391));