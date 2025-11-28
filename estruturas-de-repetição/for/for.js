// For -> Para

/* for (inicializador; condição de saída; expressão final){
    lógica - execução do código dentro da estrutura
}
*/

//  inicializador -> geralmente uma variável (contador)
// saída ->  quando a contagem deve parar (geralmente utiliza-se um operador de comparação)
//  expressão final -> quando o incializador faça mais contagem ou  menos contagem

let notas = [2, 5, 10, 20, 50, 100, 200];
let total = 0;
let test = [];

for (let repeticao = 0; repeticao < notas.length; repeticao++){
    total = total + notas[repeticao];
    test.push('aaaa');
}

console.log(test)
console.log(total);
