const obj = {
    nome: 'fulano',
    sobrenome: 'sicrano',
    idade: 20
}

for (a in obj){
    console.log(a);
}

console.log(Object.keys(obj));

const arr = [1, 2, 3, 4 , 5];
console.log(Object.keys(arr));