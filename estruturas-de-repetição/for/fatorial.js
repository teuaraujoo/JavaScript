let num = Number(prompt('Digite um número:'));
let f = 1;

for (i = num; i > 0; i--){
    f = f * i
}

alert(`O fatorial desse número é igual a: ${f}`);