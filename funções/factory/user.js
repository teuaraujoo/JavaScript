function createUser(name, age){
    return {
        name,
        age,
        get gretting(){
            return `Hello, my name is ${this.name}, I'm ${this.age} years old`;
        },
        set gretting(value){
            this.name = value;
        }, 
        get legalAge(){
            return this.age >= 18 ? true : false
        }
    };
};

try {
    const p1 = createUser('Mateus', 14);
    console.log(p1.gretting);
    if (!p1.legalAge){
        throw new Error('Menor de idade')
    }
} catch (e){
    console.log(e.message);
    const out = setTimeout(() => {
        console.log('Bloqueando sistema....');
    }, 10)

    setTimeout(() => {
        clearTimeout(out);
    }, 3000)
};
