function criarFiltro(minimo, ...valores){


    return function(){
        return valores.filter(e => e >= minimo);
    };
};

const values = [1, 2, 3, 4, 11, 12, 15];
const filtro = criarFiltro(10, ...values);

console.log(filtro());