const soma = (...valores) => {
    let res = 0;
    const somar = val => {
        // let res = 0;
        for (v of val){
            res += v;
        }
        return res;
    }
    return somar(valores);
}

console.log(soma(1, 2, 34));