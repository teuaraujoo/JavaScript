// a soma dos dois termos anteriores é o numero seguinte

let n1 = 0;
let n2 = 1;
let n3;
let q = 8;
// let q = Number(prompt('Quantos n° da sequência?'));

console.log(n2);

for (i = 1; i < q; i++){
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log(n2);
};

function solutino(first, second){
    console.log(second);
    let n3;
    for (i = 1; i < q; i++){
        n3 = second - first;
        second = first;
        first = n3;
        console.log(second);
    }
}

solutino(13, 21);
