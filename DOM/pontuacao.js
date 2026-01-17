const botao = document.querySelector("button");
const cont = document.querySelector("span");

let valor = 0;
cont.textContent = valor;

botao.addEventListener("click", () => {

    valor += 10;
    cont.textContent = valor;

    if (valor === 110){
        alert("PONTUAÇÃO MÁXIMA ATINGINDA!");
        valor = 0;
        cont.textContent = valor;
    };

});