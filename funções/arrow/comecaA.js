let strings = ['Marcos', 'Araujo', 'Junior', 'Alexia', 'Amadeus', 'Alicia', 'Paula', 'Nicolas', 'anna'];

const comecaA = arr => {
    return arr.filter(nomes => nomes[0] === 'A'  || nomes[0] === 'a');
}

console.log(comecaA(strings));