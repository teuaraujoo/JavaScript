function valoresMistos (...parametros){

    let i = 0;

    for (p of parametros){
        if (typeof(p) === "number"){
            i++;
        }
    }

    return `Possui apenas ${i} número(s).`;
}

console.log(valoresMistos(10, "Olá", 11, true, [1, 2, 3, 4], {a: 10, b: 20}));