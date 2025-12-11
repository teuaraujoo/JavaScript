function multiplicar (){

    let res = [];

    let f = Number(prompt('Qual fator?'));

    let quantV = Number(prompt('Quant de números?'));

    for (i = 0; i < quantV; i++){
        let valores = Number(prompt(`Digite o ${i +  1}° valor:`));
        res.push(f * valores);
    }
    return res;
}

console.log(multiplicar());

// ou

function multiplicarr (fator, ...valores){

    let res = [];

    for (v of valores){
        res.push(fator * v);
    }

    return res;
}

console.log(multiplicarr(2, 3, 4));