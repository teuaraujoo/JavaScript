const a = document.querySelectorAll('.container a');

a.forEach(a => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
        carregaPagina(a);
    });
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if (response.status !== 200) throw new Error('NOSSO ERRO: 404');
        const conteudo = await response.text();
        carregaResultado(conteudo);
    }
    catch(e) {
        alert('Página não encontrada!');
        console.log(e);
    }
}

function carregaResultado(conteudo) {
    const div = document.querySelector('.resultado');
    div.innerHTML = conteudo;
};