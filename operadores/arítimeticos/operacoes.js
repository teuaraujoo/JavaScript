let num1 = Number(prompt('Digite um numero:'));
let num2 = Number(prompt('Digite outro numero:'));
let operacao = prompt('Qual operação você quer? (+ , - , / , * )');

if (operacao == '+') {
    alert(num1 + num2);
} else if (operacao == '-') {
    alert(num1 - num2);
} else if (operacao == '/') {
    alert(num1 / num2);
} else if (operacao == '*'){
    alert(num1 * num2);
} else {
    alert('Operação inválida');
}