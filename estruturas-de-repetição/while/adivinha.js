// Math.floor(Math.random() * (max - min) + min);

while (true) {
    let ale = Math.floor(Math.random() * (100 - 1) + 1);
    
    let num = Number(prompt("Digite um número:"));
    
    let resp = "";

    if (num !== ale && num < ale) {
        alert(`Você errou, número menor: ${ale}`);
        resp = prompt("Quer continuar?").toLowerCase();
        if (resp == "sim" || resp == "s" || resp == "si") {
            t++;
            continue;
        } else if (num !== ale && num > ale) {
            alert(`Você errou, número maior: ${ale}`);
            resp = prompt("Quer continuar?").toLowerCase();
            if (resp == "sim" || resp == "s" || resp == "si") {
                continue;
            }
        } else {
            alert("PROGRAMA ACABOU!");
            break;
        }
    } else if (num === ale) {
        alert("Parabéns você acertou");
        break;
    }
}

// ou 



/*
let t = 1;

while (t <= 7) {
    let ale = Math.floor(Math.random() * (100 - 1) + 1);
    
    let num = Number(prompt("Digite um número:"));
    
    let resp = "";

    if (num == ale){
        alert('Você acertou');
    } else if (num !== ale && num < ale){
        alert(você errou, numero menor, tentativa n° ${t});
        } else if (num !== ale && num > ale){
            alert(você errou, numero maior, tentativa n° ${t});
        } 
        if (t === 7){
            alert('Programa Acabou, você perdeu, o número era: ${ale}');
        }
    t++;
}

*/