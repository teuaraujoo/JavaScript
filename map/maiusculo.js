const nomes = ['mateus', 'joão', 'ana'];

let maisculo = nomes.map((n) => {

    n = n.toUpperCase();
    return n;
});

console.log(nomes);
console.log(maisculo);
