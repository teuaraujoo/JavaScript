let num = [1, 2, 3, 4, 5, 6];

let dobro = num.map((d) => { 
    d = d * 2;
    return d;
});

console.log(dobro);

let quadrado = num.map((n) => {

    n *= n;
    return n;
});

console.log(`Quadrado dos números: ${quadrado.join(', ')}`);
