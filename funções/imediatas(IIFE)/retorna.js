(function(a, b){

    function calculo(){
        return a * b;
    };
    calc = calculo();
    console.log(calc);

})(10, 2);

console.log(calc); //Saída -> 20; porque calc esta sem const, let ou var

// (function(a, b){

//     function calculo(){
//         return a * b;
//     };
//     const calc = calculo();
//     console.log(calc);

// })(10, 2);

// console.log(calc); // ReferenceError

/* Váriável Global -> */ const multiplicacao = (function(a, b){
    return a * b;
});

console.log(multiplicacao(10, 2));