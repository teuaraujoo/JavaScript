function* contador(n){
    let i = 1;
    while (i <= n){
        yield i++;
    }
}

for (v of contador(10)){
    console.log(v);
}

// números pares

function* pares(n){
    let i = 0;
    while (i <= n){
        if (i % 2 === 0){
            yield i;
        }
        i++;
    }
}

for (v of pares(20)){
    console.log(v);
}