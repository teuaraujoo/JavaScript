function falaComeco(comeco){
    
    function falaResto(resto){
        return comeco + ' ' + resto
    }

    return falaResto;
};

const olaMundo = falaComeco('Olá');
console.log(olaMundo('Mundo'));

function criaMultiplciacao(multiplicador){
    return function multiplicacao(n){
        return n * multiplicador;
    };
};

const duplica = criaMultiplciacao(2);
console.log(duplica(8))