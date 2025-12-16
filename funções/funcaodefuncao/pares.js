const pares = (...valores) => {

    const contarPares = val => {
        return val
        .filter(v => v % 2 === 0)
        .length;
    }
    
    return contarPares(valores);
}

console.log(pares(1, 2, 3, 4, 5, 6));