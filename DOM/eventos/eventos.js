const button = document.getElementById("btn").addEventListener("click", () => {
    alert('botao clicado');
});

function botaoClick(){
    alert('Ola')
};

const checkbox = document.getElementById("check");

checkbox.addEventListener('change', () => {

    const div = document.getElementById('div');

    div.style.backgroundColor = 'red';
});