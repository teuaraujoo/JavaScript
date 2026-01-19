function random (min, max){
    const r = Math.floor(Math.random() * (max - min) - min);
    return r;
};

let rand = random(1, 20);
let i = 0;
// console.log(rand);
rand = 10;

while (rand !== 10){

    rand = random(1, 50);
    console.log(rand);

    i++
};

// do {
//     rand = random(1, 50);
//     console.log(rand);
//     i++;
// } while (rand !== 10);

console.log('quantidade de repeticoes' + ' ' + i);