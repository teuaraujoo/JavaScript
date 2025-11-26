function temLetraMaiuscula(str) {
    return /[A-Z]/.test(str);
}

function temLetraMinuscula(str){
    return /[a-z]/.test(str);
}

function temCaracterEspecial(str){
    return /[^\w\s]/.test(str);
}

function temNumero(str){
    return /[0-9]/.test(str);
}

let senha = prompt('Digite uma senha:');

let tamanho = senha.length;
let maiscula = temLetraMaiuscula(senha);
let minuscula = temLetraMinuscula(senha);
let especial = temCaracterEspecial(senha);
let num = temNumero(senha);

if (tamanho >= 8 && maiscula == true && minuscula == true && especial == true && num == true){
    alert('SENHA AUTORIZADA COM SUCESSO!');
} else {
    alert('SENHA FRACA!');
}

// .test -> retorna se é true/false
// /[]/ -> REGEX