const data = new Date();
const diaSemana = data.getDay();
// const diaSemana = 7;
let texto;

switch (diaSemana) {
    case 0:
        texto = 'Domingo';
        break;
    case 1:
        texto = 'Segunda';
        break;
    case 2:
        texto = 'Terça'
        break;
    case 3:
        texto = 'Quarta'
    case 4:
        texto = 'Quinta'
        break;
    case 5:
        texto = 'Sexta'
        break;
    case 6:
        texto = 'Sábado'
        break;
    default: 
        texto = 'Dia da semana não definido'; //fallback
};

console.log(texto);