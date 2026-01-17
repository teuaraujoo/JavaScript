const botao = document.querySelector(".botao");
const espaco = document.querySelector(".espaco");

let vermelho = false;

botao.addEventListener("click", () => {
    if (vermelho) {
        espaco.style.backgroundColor = "blue";
    } else {
        espaco.style.backgroundColor = "red";
    };

    vermelho = !vermelho;
});