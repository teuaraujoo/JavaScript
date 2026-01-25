(function mesagem(msg){
    msg = 'Funçaõ imediata executada!';
    console.log(msg);
})();

((valor) => {
    console.log(valor *= 2);
})(10);

((a, b) => {
    console.log(a + b);
})(10, 20);
