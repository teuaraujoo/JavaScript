// Crie uma arrow function que:
// Agrupe as vendas por vendedor
// Some o total vendido por cada vendedor
// Retorne um array de objetos organizado da seguinte forma:
// [
//   { vendedor: "Ana", total: ??? },
//   { vendedor: "Carlos", total: ??? },
//   { vendedor: "Bruno", total: ??? }
// ]
// Ordene o resultado do maior para o menor total

const vendas = [
    { vendedor: "Ana", valor: 1200, categoria: "eletronicos" },
    { vendedor: "Carlos", valor: 800, categoria: "moveis" },
    { vendedor: "Ana", valor: 600, categoria: "eletronicos" },
    { vendedor: "Bruno", valor: 400, categoria: "moveis" },
    { vendedor: "Ana", valor: 500, categoria: "eletronicos" }
];

const analiseVendas = arr => {

    const agrupar = val => {
        return val.reduce((chave, valor) => {
            chave[valor.vendedor] = (chave[valor.vendedor] || 0) + valor.valor;
            return chave;
        }, {});
    }

    const agrupado = agrupar(arr);

    return Object.entries(agrupado).map(([vendedor, total]) => ({
        vendedor,
        total
    }));
}

console.log(analiseVendas(vendas));