// Maior que 8 digitos
// Caractere especial 
// letra maiscula
// letra minuscula
// um número

/*
* Math random
* Math floor
*/

function letraMinuscula(){

    const letra = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

    return letra;
};

function letraMaiscula(){

    let letra = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    letra = letra.toUpperCase();

    return letra;
};

function numero(){
    
    const numero = Math.floor(Math.random() * 10);
    
    return numero;
}

function caractereEspecial(){
    
    const caracteres = '!@#$%&*';
    
    const sorteio = Math.floor(Math.random() * caracteres.length);
    
    return caracteres[sorteio];
};

function gerarSenha(){

    let senha = '';

    for (let i = 0; i < 4; i++){
        senha += numero();
        senha += letraMaiscula();
        senha += letraMinuscula();
        senha += caractereEspecial();
    };

    return senha;
};

const senha = gerarSenha();

function embaralharSenha(str) {
  let array = str.split('');
  for (let i = array.length - 1; i > 0; i--) {
    // Escolhe um índice aleatório de 0 a i
    const j = Math.floor(Math.random() * (i + 1));
    // Troca os elementos em i e j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
}

console.log(embaralharSenha(senha)); 
