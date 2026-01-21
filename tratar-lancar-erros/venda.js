function processarVenda(preco, saldo, validade){

    // saldo insuficiente
    if (preco > saldo){
        console.log(`Saldo atual: R$${saldo}. \nValor da compra: R$${preco}`);
        throw new RangeError('Saldo Insuficiente!');
    };
    
    // preco menor que zero e nao é numero
    if (preco < 0 || isNaN(preco)){
        throw new TypeError('Preco inválido');
    }

    const [diaV, mesV, anoV] = validade.split('/');

    const ano = Number(anoV);
    const mes = Number(mesV);
    const dia = Number(diaV);

    const hoje = new Date();
    const data_validade = new Date(ano, mes - 1, dia);
    const válido = data_validade > hoje;

    // vencimento produto
    if (!válido){
        throw new RangeError('Produto fora da validade');
    };

    return obj = {
        valorVenda: preco,
        saldoAntes: saldo, 
        saldoAtual: saldo -= preco,
        validadeProduto: validade
    };
};

const validade = '25/01/2026';
const preco = 200;
const saldo = 300;

try {
    console.log(processarVenda(preco, saldo, validade));
    console.log('Status: Venda Realizada!');
} catch (e) {
    console.log(e);
} finally {
    const timer = setTimeout(() => {
        console.log('Finalizando...')
    }, 1000);
    
    setTimeout(() => {
        clearTimeout(timer);
    }, 5000)
};
