function contadorIncicial(valorIncial){

    const conta = () => {
            valorIncial++;
            return valorIncial;
    };

    return conta;
};

const contar = contadorIncicial(1)
console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())
console.log(contar())
