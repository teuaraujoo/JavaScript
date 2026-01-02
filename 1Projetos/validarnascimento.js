function validarDataNascimento(data, idadeMinima = 18) {

    let dia, mes, ano;

    // Detecta formato
    if (data.includes('/')) {
        [dia, mes, ano] = data.split('/').map(Number);
    } else if (data.includes('-')) {
        [ano, mes, dia] = data.split('-').map(Number);
    } else {
        return false;
    }

    // Verifica se a data existe
    const dataNasc = new Date(ano, mes - 1, dia);
    if (
        dataNasc.getFullYear() !== ano ||
        dataNasc.getMonth() !== mes - 1 ||
        dataNasc.getDate() !== dia
    ) {
        return false;
    }

    // Não pode ser futura
    const hoje = new Date();
    if (dataNasc > hoje) return false;

    // Calcula idade
    let idade = hoje.getFullYear() - ano;
    const ajuste =
        hoje.getMonth() < mes - 1 ||
        (hoje.getMonth() === mes - 1 && hoje.getDate() < dia);

    if (ajuste) idade--;

    return idade >= idadeMinima;
}

console.log(validarDataNascimento('12/08/2005')); // depende da data atual
console.log(validarDataNascimento('31/02/2000')); // false
console.log(validarDataNascimento('2050-01-01')); // false
console.log(validarDataNascimento('01/01/2010', 14)); // true/false