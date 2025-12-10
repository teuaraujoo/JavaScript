const categorias = {
    frutas: ["maçã", "banana"],
    legumes: ["cenoura", "batata"],
    carnes: ["frango", "carne bovina"]
};

for (let categoria in categorias){
    console.log('----------------------');
    console.log(`Categoria: ${categoria}`);
    for (let item of categorias[categoria]){
        console.log(item);
    }
}
