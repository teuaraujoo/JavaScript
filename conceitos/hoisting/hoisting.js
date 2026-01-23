saudar(); // Funciona!
function saudar() {
    console.log("Olá!");
}

console.log(nome); // Saída: undefined
var nome = "Maria";
console.log(nome); // Saída: Maria

console.log(x); // ReferenceError: Cannot access 'x' before initialization
const x = 1;
{
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    const x = 2;
}