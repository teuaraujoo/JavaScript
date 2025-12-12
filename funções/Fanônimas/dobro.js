const d = new Function("v1", "return v1 * 2");

setTimeout(function() {
    console.log("Carregando...");
}, 2000);

setTimeout(function() {
    console.log(d(10));
}, 3000);
