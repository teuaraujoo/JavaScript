const prompt = require('prompt-sync')();
const axios = require('axios');
const cep = prompt('Digite o CEP: ');

axios(`https://viacep.com.br/ws/${cep}/json/`).then(resp => {
    console.log(resp.data);
});