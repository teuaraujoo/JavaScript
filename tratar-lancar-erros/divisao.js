function correctDivision(a, b){

    try {
        if (b <= 0){
            throw new Error('Impossível dividir por zero(0)');
        };
    } catch (e) {
        return e;
    };

    return (a / b).toFixed(2);
};

console.log(correctDivision(5, 0));