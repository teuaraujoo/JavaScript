const test  = Math.random();
console.log(test);
const floor = Math.floor(test);
console.log(floor);

console.log(Math.floor(Math.random() * 100) + 1);

function random (min, max){
    const r = Math.floor(Math.random() * (max - min + 1) + min);
    return r;
};

let rand = random(1, 20);
let i = 0;
console.log(rand);
// rand = 10;

while (rand !== 10){

    rand = random(1, 20);
    console.log(rand);

    i++
};

// do {
//     rand = random(1, 50);
//     console.log(rand);
//     i++;
// } while (rand !== 10);

console.log('quantidade de repeticoes' + ' ' + i);
