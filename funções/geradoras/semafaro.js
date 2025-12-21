function* semaforo(){

    while (true){
        yield 'Verde';
        yield 'Amarelo';
        yield 'Vermelho';
    }
};

const itc = semaforo();

console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);