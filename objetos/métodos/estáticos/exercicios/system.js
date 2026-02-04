function Sistema(){
    Object.defineProperties(this, {
        ambiente: {
            enumerable: true,
            value: 'Em manutenção',
            writable: false,
            configurable: false
        },
        debug: {
            enumerable: true,
            value: true,
            writable: true,
            configurable: false
        },
        versao: {
            enumerable: true, 
            value: '1.0.0',
            writable: true,
            configurable: false
        }
    });
};

const system = new Sistema();

console.log(Object.keys(system));
console.log(system);