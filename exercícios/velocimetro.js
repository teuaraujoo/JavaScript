function converte(valor){
    return Number(valor.replace(',', '.'));
}

let vel = converte(prompt('Qual a velocidade do carro?'));

if (vel <= 80){
    alert('Você está dentro da lei! Velocidade permitida');

} else if (vel > 80){
    let multa = (vel - 80) * 5
    alert(`Você foi multado e terá que pagar R$${multa} reais`);
}