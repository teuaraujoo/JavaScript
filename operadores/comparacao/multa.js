
function converte(valor) {
    return Number(
        valor
        .replace("KM/h", "") 
        .replace("km/h", "")
        .replace("KM", "")
        .replace("km", "")
        .replace(/\s+/g, "")
        .replace(/\./g, "")
        .replace(",", ".")
    );
}

let vel = converte(prompt('Digite sua velocidade:'));

const limite = 80;

let acima10 = 80 * 1.1; //88
let acima30 = 80 * 1.3; // 104

if (vel < 80){
    alert('Dentro da velocidade!')
}else if (vel == 80){
    alert('NO LIMITE');
} else if (vel <= acima10){
    alert('ATENÇÃO! Velocidade excedida levemente');
} else if (vel >= acima10 && vel <= acima30){
    alert('MULTA MÉDIA');
} else if (vel > acima30) {
    alert('MULTA GRAVE');
}