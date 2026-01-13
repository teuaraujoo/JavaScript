const cursos = ['html', 'php', 'javascript', 'css', 'python', 'java', 'ruby'];

cursos.map((el, i)=> {
    console.log(el.toUpperCase());
});

console.log(cursos);


const converterInt = (e) => parseInt(e);

let num = ['1', '2', '3', '4'];
console.log(num);

num = num.map(converterInt);
console.log(num);

// mesma coisa em cima ↑ e em baixo ↓

num = num.map((e) => {
    return parseInt(e);
})
console.log(num);

