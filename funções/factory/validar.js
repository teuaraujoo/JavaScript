function validarProduto(nome, validade){
    return {
        nome, 
        validade,
        get estaValido(){
            const hoje = new Date();
            const [dia, mes, ano] = this.validade.split('/');

            const diaV = Number(dia);
            const mesV = Number(mes);
            const anoV = Number(ano);
            const validade = new Date(anoV, mesV - 1, diaV);

            const situacao = validade > hoje;
            if (hoje === validade ){
                throw new Error('Produto fora da validade');
            } else if (!situacao){
                return 'ATENÇÃO -> ÚLTIMO DIA DE VALIDADE'
            }
            return 'Produto válido';
        }
    }
}

try {
    const p1 = validarProduto('Patinho', '27/01/2026');
    console.log(p1.estaValido);
} catch(e){
    console.log(e.message);
}