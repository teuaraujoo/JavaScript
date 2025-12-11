function concatenar(...palavras){
    let conc = "";
    for (p of palavras){
        conc += p;
    }
    return conc;
}

console.log(concatenar("Olá", "Mundo"));