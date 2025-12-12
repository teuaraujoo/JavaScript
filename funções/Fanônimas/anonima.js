const f = function(...valores) {

    let s = 0;

    for (v of valores){
        s += v;
    }
    return s;
};

console.log(f(10, 5, 5));

// ou

const F = new Function("v1", "v2", "return v1 + v2"); //Função anônima 

console.log(F(10, 5));

// string minuscula

const min = new Function("a", "return a.toLowerCase();")

console.log(min('MATEUS'));