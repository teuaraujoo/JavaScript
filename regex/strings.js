// MANIPULAÇÃO DE STRING


function Palavra(str){
    this.string = str;
}

Palavra.qtdLetras = (str) => {
    str
    .replace(/\s+/g, '')
    .replace(/./g, '')
    .replace(/,/g, '')
}


let test = 'teste a a, dwada '

const a = test.replace(/\s+/g, '');
console.log(a)
