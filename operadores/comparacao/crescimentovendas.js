function converte(valor){
    return Number(
        valor
        .replace("R$", "") 
        .replace("r$", "")
        .replace(/\s+/g, "")
        .replace(/\./g, "")
        .replace(",", ".")
    );
}

let m1 = converte(prompt('Valor de venda do mes1:'));
let m2 = converte(prompt('Valor de venda do mes2:'));
let m3 = converte(prompt('Valor de venda do mes3:'));

if (m1 < m2 && m2 < m3){
    alert('CRESCEU');
} else if (m1 > m2 && m2 > m3){
    alert('DECAIU');
} else {
    alert('MISTO');
}