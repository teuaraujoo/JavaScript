const d = new Function("v1", "return v1 * 2");

// setTimeout = atraso de execução
setTimeout(function() {
    console.log("Carregando...");
}, 2000);

setTimeout(function() {
    console.log(d(10));
}, 3000);
