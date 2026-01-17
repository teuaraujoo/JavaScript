const botao = document.querySelector("button");
const input = document.querySelector("input");

const aviso = document.createElement("a");
aviso.style.display = "none";
aviso.textContent = 'Obrigatório Nome!'
document.body.appendChild(aviso);


botao.addEventListener("click", () => {
    
    if (input.value === ''){
        aviso.style.display = "block";
    } else {
        aviso.style.display = "none";
    };
});