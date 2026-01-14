const clientes = [
    { nome: 'Mateus', saldo: 500 },
    { nome: 'Ana', saldo: 1200 },
    { nome: 'João', saldo: 300 }
];

let classificacao = clientes.map((cliente) => {

    cliente = {
        nome: cliente.nome,
        status: cliente.saldo > 1000 ? 'VIP' : 'COMUM'
    };

    return cliente;
});

console.log(classificacao);