const maiorNumero = (...valores) => {
    
    let maior = -Infinity;

    const maiorValor = val => {
        
        for (v of val){
            v > maior ? maior = v : maior = maior;
        }
        return maior;
    };

    return maiorValor(valores);
};

console.log(maiorNumero(50, 20, 30, 90, 10, 70, 11));
