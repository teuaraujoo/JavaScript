for (i = 1; i < 10; i++){
    console.log(i);
    if (i === 5){
        break;
    }

    
}

console.log("deu o break");

let x = 10;

while (x <= 100){
    
    x += 10;

    if (x == 50){
        console.log('CONTINUE')
        continue;
    }
    
    console.log(`testando continue: ${x}`);
}