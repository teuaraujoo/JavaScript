const paises = {
    Brasil: "Brasília",
    Argentina: "Buenos Aires",
    Chile: "Santiago"
};

const obj = {};

for( p in paises){

    chaves = paises[p];
    obj[chaves] = p;

};

console.log(obj);