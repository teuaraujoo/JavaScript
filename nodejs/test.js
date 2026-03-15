function saudar() {
 return 'Ola Mundao';
}

class Classe {
 constructor(nome) {
  this.nome = nome;
 }
}

exports.saudar = saudar();
exports.nome = 'Mateus';
module.exports = Classe;

