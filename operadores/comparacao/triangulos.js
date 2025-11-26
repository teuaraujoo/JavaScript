let l1 = Number(prompt('Digite um lado do triângulo:'));
let l2 = Number(prompt('Digite outro lado do triângulo:'));
let l3 = Number(prompt('Digite ultimo lado do triângulo:'));

if (l1 + l2 > l3 || l2 + l3 > l1 || l3 + l1 > l2){
    if (l1 === l2 && l2 === l3){
        alert('Triângulo equilátero');
    } else if (l1 === l2 || l2 === l3 || l1 === l3){
        alert('Triângulo isósceles');
    } else if (l1 != l2 != l3){
        alert('Triângulo escaleno');
    }
}