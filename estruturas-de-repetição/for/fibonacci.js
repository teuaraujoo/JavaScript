// a soma dos dois termos anteriores é o numero seguinte

let n1 = 0;
let n2 = 1;
let n3;
let c  = 0;
let q = Number(prompt('Quantos n° da sequência?'));

for (i = 1; i < q; i++){
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n2);
    c = c + n2;
}

console.log(c);