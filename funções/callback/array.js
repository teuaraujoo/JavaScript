function processarArray(arr, callback){
    return callback(arr);
};

const num = [1, 2, 3, 4, 5 , 7, 9, 10, 231];

console.log(processarArray(num, (arr) => {
    return arr.filter((e) => e % 2 === 0);
}));

console.log(processarArray(num, (arr) => {
    return arr.map((e) => e * 2);
}));