function* contagemRegressiva(n){
    while (n >= 0){
        yield n;
        n--;
    }
};

for (v of contagemRegressiva(20)){
    console.log(v);
}; 