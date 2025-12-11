function valoresMistos (...parametros){

    let n = 0;
    let s = 0;
    let b= 0;

    for (p of parametros){
        if (typeof(p) === "number"){
            n++;
        }
        if (typeof(p) === "string"){
            s++;
        }
        if (typeof(p) === "boolean"){
            b++;
        }
    }

    return obj = {
        numero: n,
        string: s,
        bool: b,
    };
}

console.log(valoresMistos(10, 20, "ola", "mundo", true, false));

