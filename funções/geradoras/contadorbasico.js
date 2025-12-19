function* contadorBasico(){
    yield 1;
    yield 2;
    yield 3;  
}

const cont = contadorBasico();

console.log(cont.next().value);
console.log(cont.next().value); 
console.log(cont.next().value); 