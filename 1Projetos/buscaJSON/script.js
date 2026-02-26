const arquivo  = './pessoas.json';
const nome = document.getElementById('nome')
const form = document.querySelector('form');
const btn = document.querySelector('button');
const div = document.querySelector('.resultado');

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const valor = nome.value;
    if (!verificacoes(valor)) return;
    getData(valor);
    nome.value = '';
})


function getData(nome) {
    fetch(arquivo).then(res => {
        return res.json();
    }).then(json => {

        const resultado = []

        Object.values(json).filter((item) => {
            if (item.nome.toUpperCase().includes(nome.toUpperCase())) {
                resultado.push(item);
            }
        });
        console.log(resultado);

        const div = document.querySelector('.resultado');
        div.innerHTML = '';

        if (resultado.length === 0) {
            alert('Nome nao encontrado!');
            return;
        }

        resultado.forEach(element => {
            div.innerHTML += `<p>${element.nome}</p>`;
        });
    }).catch(e => {
        console.log('ERROR: ' + e.message);
    })
};

function verificacoes(valor) {
    if (valor === '') {
        alert('Digite algo');
        return false;
    }
    
    if (valor.length < 3) {
        alert('Digite pelo menos 3 caracteres');
        return false;
    }
    return true;
};