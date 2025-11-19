let cargos = ['Chefe', 'Gerente', 'Funcionário', 12, 2];
console.log(cargos);
console.log(cargos[3] * cargos[4]);
// Tem como misturar tipos de dados dentro de um array (vetor)
// Tem como fazer cálculos com os dados do array

cargos[2] = 'Analista';
console.log(cargos[2]);
// Manipulando o dado de um array

cargos.push('Estagiário');
console.log(cargos); //Adiciona Estagiário como último elemento do array

cargos.pop(); //Remove o último elemento do array
console.log(cargos); //Remove Estagiário do array


cargos.push(2);
cargos.push(4);
console.log(cargos);
let calculo = cargos[5] * cargos[6];
console.log(calculo);

//  FIXME:  lembre-se! os arrays comecam do 0 ou seja para acessar o primeiro item você irá colocar [0]

