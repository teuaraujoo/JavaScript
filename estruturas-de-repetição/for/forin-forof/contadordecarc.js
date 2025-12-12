// contador de caracteres de cada chave do obj

const produto = {
    nome: "Camiseta",
    categoria: "Roupas",
    marca: "Nike"
};

const objj = {};
let tam = 0;

for ([chave, valor] of Object.entries(produto)){
    objj[chave] = valor.length;
}

console.log(objj);

//ou

for (p in produto){
    tam = produto[p].length;
    objj[p] = tam;
}

console.log(objj);