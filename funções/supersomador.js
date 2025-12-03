function superSomador(a, b){
    let soma = 0;
    if (a > b){
        soma = a;
        for(i = b; i < a; i++){
            soma = soma + b;
            b++;
        }
    } else if (b > a) {
        soma = b;
        for (i = a; i < b; i++){
            soma = soma + a;
            a++;
        }
    } 
    return soma;
}

let n1 = 10;
let n2 = 25;
console.log(`A soma de todos os números entre ${n1} e ${n2} é igual a: ${superSomador(n1, n2)}`);