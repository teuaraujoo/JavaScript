const botao = document.querySelector(".button");
const cont = document.querySelector("span");
const zerar = document.querySelector(".button2");

let valor = 0;
cont.textContent = valor;

botao.addEventListener("click", () => {

    valor++;
    cont.textContent = valor;
});

zerar.addEventListener("click", () => {

    valor = 0;
    cont.textContent = valor;
}); 
