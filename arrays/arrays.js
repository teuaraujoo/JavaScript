let cargos = ['Chefe', 'Gerente', 'Funcionário', 12, 2];
console.log(cargos);
console.log(cargos[3] * cargos[4]);
// Tem como misturar tipos de dados dentro de um array (vetor)
// Tem como fazer cálculos com os dados do array

cargos[2] = 'Analista';
console.log(cargos[2]);
// Manipulando o dado de um array

cargos.push('Estagiário'); // adiciona um elemento no ultimo indice do array (cria um novo indice com valor) 
console.log(cargos); //nao afeta o indice dos outros elementos do array

cargos.pop(); //Remove o último elemento do array
console.log(cargos); //Remove Estagiário do array

cargos.unshift('Pedreiro'); // contrario do push -> adiciona um elemento no início do array
console.log(cargos) // afeta todos os índices pois irá deslocar todos os emelentos para direita

cargos.push(2);
cargos.push(4);
console.log(cargos);
let calculo = cargos[5] * cargos[6];
console.log(calculo);

//  FIXME:  lembre-se! os arrays comecam do 0 ou seja para acessar o primeiro item você irá colocar [0]

// [] -> índice do array



// delete
let nomes = ['Mateus', 'Julia', 'Joao'];

delete nomes[2];  // -> delete um elemento do array sem alterar on índices
console.log(nomes);

// construtor
let nomes1 = new Array('Mateus', 'Julia', 'Joao'); // pode-se utilizar construtor para qualquer tipo de váriável (bool, str, num...)
delete nomes1[2];
console.log(nomes1);
