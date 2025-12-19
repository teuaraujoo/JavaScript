function* geradorId(){
    let i = 1;
    while (true){
        yield i++;
    }
}

const id = geradorId();
let userCreateAccout = true;

let i = 0;

let nome = prompt('Digite seu nome:');
// const Nome = 'Mateus'; // -> para testar 

function criarIdUsuario(){
    const ID = id.next().value;
    return {
        ID,
        Nome
    }
}

console.log(criarIdUsuario());