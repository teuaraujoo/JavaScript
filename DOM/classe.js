const botao = document.querySelector("button");
const div = document.querySelector("div");

botao.addEventListener("click", () => {


    div.classList.toggle('ativado');
});