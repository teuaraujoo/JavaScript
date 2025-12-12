const dados = {
    a: [1, 2, 3],
    b: [4, 5, 6],
    c: [7, 8, 9]
};

function arrPar(arr){

    let pares = [];

    for (chave in arr){
        let nums = arr[chave];

        for(valor of nums){
            
            if (valor % 2 === 0){
                pares.push(valor);
            }
        }
    }
    return pares;
}

console.log(arrPar(dados));

