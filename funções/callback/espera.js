function esperar(callback){
    setTimeout(() => {
        callback();
    }, 2000)
};

function callback(){
    console.log('Fui executado após 2 segundos');
};

esperar(callback)