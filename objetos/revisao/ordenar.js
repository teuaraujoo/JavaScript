// const pedidos = [
//     { cliente: "João", total: 120 },
//     { cliente: "Pedro", total: 40 },
//     { cliente: "Maria", total: 80 }
// ];

// pedidos.sort((a, b) => b.total - a.total);

// console.log(pedidos);

const pedidos = [
    { cliente: "João", total: 120 },
    { cliente: "Pedro", total: 40 },
    { cliente: "Maria", total: 80 }
];

for (let i = 0; i < pedidos.length; i++) {
    for (let j = 0; j < pedidos.length - 1; j++) {

        // troca para deixar em ordem decrescente
        if (pedidos[j].total < pedidos[j + 1].total) {
            const temp = pedidos[j];
            pedidos[j] = pedidos[j + 1];
            pedidos[j + 1] = temp;
        }

    }
}

console.log(pedidos);
