try {
    console.log(nao);
} catch (error){
    console.log('Variável nao, nao esta definida')
    console.log(error) //erro + stacktrace
};

function somar(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('X e Y precisa ser números');
    };

    return x + y;
};

console.log(somar(10, 20));
console.log(somar('10', 20));

try {
    console.log(somar(10, 20));
    console.log(somar('10', 20));
} catch (error){
    console.log(error) // x e y precisam ser numeros, sem stacktrace
};


function somar(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('X e Y precisam ser números'); //função construtora do JS (new Error, new ReferenceError.... existem inúmeros tipos error)
    };

    return x + y;
};

try {
    console.log(somar(10, 20));
    console.log(somar('10', 20));
} catch (error){
    console.log(error); //Error: x e y precisam ser números + stacktrace
} finally {
    console.log('sou sempre executado');
};
