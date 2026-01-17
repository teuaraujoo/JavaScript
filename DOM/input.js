const texto = prompt("Digite um texto:");

const botao = document.querySelector(".show");
const parag = document.querySelector("p");

botao.addEventListener("click", () => {

    parag.textContent = texto;
});