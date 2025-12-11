const objeto = {
    nome: 'Mateus',
    idade: 18,
    email: 'mateus@email.com'
}

let tn = false;
let mi = false;
let te = false;

function validarObj (obj, ...regras){


    for (r of regras){
        if (obj.nome != ''){
            tn = true;
        }
        if(obj.idade >= 18 && obj.idade != isNaN(obj.idade)){
            mi = true;
        }
        if(obj.email != ''){
            te = true;
        }
    }

    return objVerificado = {
        temNome: tn,
        maiorIdade: mi,
        temEmail: te
    }
}

console.log(validarObj(objeto, tn, mi, te));