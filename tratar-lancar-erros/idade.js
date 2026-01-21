function ageValidation(age){
    try {
        if (age < 0 || age > 120){
            throw new Error('Idade inválida');
        };
    } catch (e) {
        return e;
    }
    
    return 'Idade válida';
};

console.log(ageValidation(15));
console.log(ageValidation(121));