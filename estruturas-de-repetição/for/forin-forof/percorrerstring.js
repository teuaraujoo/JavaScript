const nome = 'Javascript';

for (l of nome){
    console.log(`${l}`);
}

const nomes = ["Ana", "Gabriel", "Julia", "Mateus"];

console.log('nomes com mais de 5 letras:');
for (n of nomes){
    if (n.length > 5){
        console.log(n);
    }
}