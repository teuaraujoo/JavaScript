function* cores (){
    yield 'Vermelho'
    yield 'Azul'
    yield 'Verde'
}

const itc = cores();

console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);

// perguntas

function* perguntas(){
    const nome = yield 'Qual seu nome?';
    const esporte = yield 'Qual seu esporte favorito?';
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte;
}

const itp = perguntas();

console.log(itp.next().value);
console.log(itp.next('Mateus').value);
console.log(itp.next('Basquete').value);


// contador

function* contador (){
    let i = 0;
    while (true){
        yield i++;
        if( i > 5) break; 
    }
}

const itcc = contador();

// for (i = 0; i < 10; i++){
//     console.log(itcc.next().value);
// }

for (c of itcc){
    console.log(c);
}