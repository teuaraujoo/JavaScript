// capturando elemento pelo ID

let titulo = document.getElementById("titulo1");

// capturando por classe -> além de capturar o elemnte, também captura os elementos filhos da classe

let titulo2 = document.getElementsByClassName('titulo2');

// capturando pelas tags 

let tags = document.getElementsByTagName("h1");

// capturando pelo seletor css

let teste = document.querySelector('.titulo2');


// -------------------------------------------------------------------------

let nome = prompt('Digite seu nome');
let newTitle = document.getElementById('titulo1').innerHTML = `Seja bem vindo ${prompt("Qual seu nome?") /* ou ${nome} */}`;

let novoElemento = document.createElement("h2");
novoElemento.innerHTML = 'oiiiii';
document.body.appendChild(novoElemento);

let pergunta = prompt("Ver mensagem secreta? 1 sim 2 nao");

if (pergunta === '1'){
    let novoElemento = document.createElement("p");
    novoElemento.innerHTML = 'toma no cu seu curioso kkkk';
    document.body.appendChild(novoElemento);
};

let removerElemento = document.getElementById('remove');
removerElemento.remove();