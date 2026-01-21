function convertJson(str){

    try {
        return JSON.parse(str); 
    } catch (e){
        return null;
    };
};

const result = convertJson('{"usuario":{"nome":"Teteu","ativo":true},"pontos":[10,20,30]}');
// const result = convertJson('ola');

if (result) {
    console.log(result);
} else {
    console.log('JSON inválido');
};
