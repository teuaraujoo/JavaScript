//  for in e for of -> variações do loop for

let num = [10, 20, 30, 40, 45, 2, 4];

for (i = 0; i < num.length; i++){
    console.log(num[i]);
}

console.log("---------------------------")
// for in -> itera as chaves/posição de  um objeto/array

for (n in num){
    console.log(n);
}

console.log("-----------------------------")
// for of -> itera os valores

for (n of num){
    console.log(n);
}

// quer pegar as posições? for in
// quer pegar os elementos? for of

// objetos não são iteráveis (JS)
// iteraveis -> qualquer objeto em programação que pode ser percorrido
// iteráveis -> repetir/loops
