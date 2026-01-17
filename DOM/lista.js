const texto = document.querySelector("input");
const botao = document.querySelector("button");
const lista = document.querySelector("ul");

// const novoElemento = document.createElement("li");

botao.addEventListener("click", () => {
    const novoElemento = document.createElement("li");

    novoElemento.textContent = texto.value;

    lista.appendChild(novoElemento);
    texto.value = '';

    novoElemento.addEventListener("click", () => {

        novoElemento.remove();
    });
});



