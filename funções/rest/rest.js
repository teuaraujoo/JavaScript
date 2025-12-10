// parâmetros rest -> forma de passar parametros que nao precisa especificar a quantidade de parâmetros que irao passar para dentro da função
// -> criar uma função sem números determinados de valores
// spread = espalhar = ...

function soma (...valores){
    let tam = valores.length;
    let res = 0;
    for (i = 0; i < tam; i++){
        res += valores[i];
    }
    return res;
}

// ou
function soma (...valores){
    let res = 0;
    for (v of valores){
        res += v;
    }
    return res;
}

console.log(soma(10,5, 24, 31, 20));