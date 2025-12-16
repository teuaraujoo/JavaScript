const separarValores = (...valores) => {

    const pares = val => {
        return val.filter(v => v % 2 === 0);
    }

    const impares = val => {
        return val.filter(v => v % 2 === 1);
    }

    let par = pares(valores).join(', ');
    let impar = impares(valores).join(', ');

    const obj = {
        par,
        impar
    }

    return obj;
}

console.log(separarValores(1, 2, 3 , 4, 5 , 6));