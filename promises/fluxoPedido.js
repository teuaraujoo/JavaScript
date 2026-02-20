// Você vai simular um fluxo de compra.

const clientes = [
    { id: 1, nome: "césar", cpf: "12345678900" },
    { id: 2, nome: "mateus", cpf: "12345678901" },
    { id: 3, nome: "joão", cpf: "12345678902" },
];

const formasPagamento = ['crédito', 'débito', 'pix', 'boleto'];

function entradaDados() {
    return {
        nome: 'césar',
        produto: 'teste',
        valor: 150,
        formaPag: 'crédito'
    }
}

function criarPedido() {
    const dados = entradaDados();
    return new Promise((resolve, reject) => {
        const acharCliente = clientes.find(c => c.nome === dados.nome);
        if (!acharCliente) {
            return reject('Cliente não encontrado');
        }
        resolve({ ...dados });
    });
};

function processarPagamento(dados) {
    return new Promise((resolve, reject) => {
        if (!formasPagamento.includes(dados.formaPag)) {
            reject('Forma de pagamento negada!');
        };

        resolve(dados);
    });
}

function enviarEmail(dados) {
    return new Promise((resolve, reject) => {
        const acharNome = clientes.find(c => c.nome === dados.nome);
        if (!acharNome) {
            reject('Cliente não encontrado')
        }
        resolve('Enviando email...');
    });
};

// criarPedido().then(processarPagamento).then(enviarEmail).then(resp => {
//     console.log(resp);
// });

// mesma coisa 🔼  🔽
criarPedido().then(resp => {
    return processarPagamento(resp);
}).then(resp => {
    return enviarEmail(resp);
}).then(resp => { 
    console.log(resp);
})