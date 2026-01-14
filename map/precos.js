const valores = [50, 120, 80, 200];

let desconto = valores.map((v) => {

    if (v > 100){
        const comDesconto = `*${v * 0.9}`;
        return comDesconto;
    }
    return v;
});

console.log(desconto);

const custos = [100, 200, 300];

let impostos = custos.map((c) => {

    c = [
        {
            original: c, 
            comImposto: parseInt((c * 1.15).toFixed(0))
        }
    ];
    return c;
});

console.log(impostos);