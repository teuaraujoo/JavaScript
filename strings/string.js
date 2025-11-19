// como declarar uma variavel do  tipo string

// qualquer coisa que seja colocada dentro de aspas sera conmsiderado string, independente de ser numero, nome, texto .....

let string = '90'; 

// concatenar strings ("juntar um texto no outro")

let saudacao = 'Olá, meu nome é ';
let nome = 'Mateus';

let apresentacao = saudacao + nome;
console.log(apresentacao); // Olá, meu nome é Mateus


let pessoa = "Carol";
let apresentacaoPessoa = "Olá, meu nome é " + pessoa;
console.log(apresentacaoPessoa); // Olá, meu nome é Carol - jeito "antigo"

let pessoa1 = "Carol";
let apresentacaoPessoa2 = `Olá, meu nome é ${pessoa1}`;
console.log(apresentacaoPessoa2); // Olá, meu nome é Carol - jeito "moderno" - tudo dentro das crases irao se comportar como texto

//TODO: Exercício (recebe o nome de usuário e mostra a mensagem de boas vindas)
let nomeUsuario = prompt('Qual é o seu nome?');
let mensagem = `Olá ${nomeUsuario}, seja bem vindo!`;
alert(mensagem);

//  ou
// alert(`Olá ${nomeUsuario}, seja bem vindo!`);
