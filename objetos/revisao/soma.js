const pedidos = [
    { cliente: "João", total: 120 },
    { cliente: "Maria", total: 80 },
    { cliente: "Pedro", total: 40 }
];

let soma = 0;

pedidos.forEach((p) => {
    soma = soma + p.total;
});

console.log(soma);