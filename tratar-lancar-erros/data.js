function dateBirth(d){
    
        if (!(d instanceof Date) || isNaN(d)){
            throw new SyntaxError('Data inválida');
        };

    const today = new Date();
    let age  = today.getFullYear() - d.getFullYear()

    const hasBirthdayPassed = today.getMonth() > d.getMonth() ||
    today.getMonth() === d.getMonth() && today.getDate() >= d.getDate();

    if (age < 18 || !hasBirthdayPassed){
        throw new RangeError('Idade menor que 18');
    };

    return 'Acesso permitido!';
};  

// const data = new Date('2007/03/25');
const data = new Date(2008, 0, 19);

try {
    console.log(dateBirth(data));
} catch (e){
    console.log(e);
};
