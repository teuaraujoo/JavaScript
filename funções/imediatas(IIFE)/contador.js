(() => {
    
    let contador = 0;
    function incremento(){
        return contador++;
    };
    incremento();
    incremento();
    incremento();
    incremento();
    console.log(incremento());
})();