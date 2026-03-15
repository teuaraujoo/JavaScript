// const axios = require('axios');
const { saudar, nome } = require('./test');
const Classe = require('./test');
console.log(saudar);
console.log(nome);

const p1 = new Classe('Mateus');
console.log(p1);

// const CEP = '49095815';

// axios(`https://viacep.com.br/ws/${CEP}/json/`).then((resp) => {
//  console.log(resp.data)
// }).catch(error => console.log(error));