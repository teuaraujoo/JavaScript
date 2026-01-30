function Produto(nome, validade){

    this.nome = nome;
    this.validade = validade;

    this.estaValido = () => {

        const hoje = new Date();
        const [dia, mes, ano] = this.validade.split('/');

        const diaV = Number(dia);
        const mesV = Number(mes);
        const anoV = Number(ano);

        const validade = new Date(ano, mes - 1, dia);

        const dentroValidade = validade >= hoje;

        if (!dentroValidade){
            return 'Produto fora da validade!';
        };

        return 'Produto válido';
    };
};

const produto = new Produto("banana", '25/03/2026');

console.log(produto.estaValido());