(function inicializacao(msg){
    const timer = setTimeout(() => {
        console.log(msg);
    }, 0);

    setTimeout(() => {
        clearTimeout(timer)
    }, 5000);
})('Inicializando Sistema...');