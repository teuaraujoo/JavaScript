// Joao tem duas caixas de pirulito e precisa dividdir para alguns amigos
let caixa = [];
let amigos = [];

for(let i = 0; i < 2; i++){
    let quantC = Number(prompt(`Quantos pirulitos a ${i + 1}° caixa possui?`));
    caixa.push(quantC);
}
let quantAmigos = Number(prompt('Quantas pessoa irão comer pirulito?'));
amigos.push(quantAmigos);

let divisao = (caixa[0] + caixa[1])/amigos[0];

alert(`Cada amigo irá ficar com ${divisao} pirulitos`);