function misturarArray (...arr){

    let juntos = [];
    
    for (a of arr){
        juntos.push(...a);
    }
    return juntos;
}

console.log(misturarArray([1, 2, 3], [4, 5, 6], [7, 8, 9]));
