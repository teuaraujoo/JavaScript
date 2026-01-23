// 1- escopo global

// todos consegue acessar o x sem erro

let x = 0;
console.log(x);

for (x = 0; x < 2; x++){
    console.log(x);
};

console.log(x);

function test(){
    x = x + 2;

    return x;
}

console.log(test());
console.log(x);

// 2- escopo de funcao

function teste(){

    let y = 10;

    return y;
}
console.log(teste());
console.log(y); // ReferenceError: y is not defined

// 3- escopo de bloco

for (let i = 0; i < 2; i++){
    console.log(i);
};

console.log(i);

// escopo léxico
// a funcao interna consegue "lembrar" da variavel declarada fora dela

function lexico(){

    let v = 0;

    function interna(){
        v = 10;

        function internaInterna(){
            v = 20;
            return v;
        };

        return internaInterna();
    };

    return interna();
};

console.log(lexico())