let num = Number(prompt('Digite um número:'));
let f = 1;

while (num > 0){
    f = f * num;
    num--;
}

console.log(f);