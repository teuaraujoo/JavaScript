function* letras(palavra){
    for (p of palavra){
        yield p;
    }
}

const nome = 'Mateus';
const soletrando = letras(nome);

for (p of letras(soletrando)){
    console.log(p);
}