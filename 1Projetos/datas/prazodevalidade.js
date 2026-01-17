// const data = new Date();
// // let mes = "" + data.getMonth() + 1;
// // let ano = data.getFullYear();
// // let mesAno = `${mes}/${ano}`;

// console.log(data.toDateString());
// console.log(mesAno);
// console.log(Date.now()) // timestamp: valor que representa milesegundos que passaram desde janeiro de 1970

// 2026-01-17T18:03:08.468Z -> formato de saída new Date();

const VALIDADE = "16/08/27";

function situacaoProduto (validade) {

    const validarProduto = () => {

        const hoje = new Date();

        const [diaV, mesV, anoV] = validade.split('/');

        const dia = Number(diaV);
        const mes = Number(mesV);
        const ano = Number('20' + anoV);

        const DATA_VALIDADE = new Date(ano, mes - 1, dia);

        return DATA_VALIDADE > hoje;
    };


    return validarProduto();
};

const situacao = situacaoProduto(VALIDADE);

if (!situacao){
    console.log("Produto inválido!");
} else {
    console.log("Produto válido!");
};