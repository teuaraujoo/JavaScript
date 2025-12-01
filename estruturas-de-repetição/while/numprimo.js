// tentar dividi-lo por números menores, começando pelos primos (2, 3, 5, 7, etc.). Se o resto de alguma dessas divisões for zero, o número não é primo. Caso o resto nunca seja zero em todas as divisões necessárias (até o quociente ser menor ou igual ao divisor), o número é primo. 

let numeroDigitado = Number(prompt('Digite um numero'));
let divisor = 2;

while(numeroDigitado % divisor != 0){
    divisor++;
}

if(numeroDigitado == divisor){
    alert("Número Primo!");
} else {
    alert("Número NÃO primo!");
}