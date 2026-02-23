const arquivo = './pessoas.json';
// fetch(arquivo)
//     .then(response => {
//         return response.json();
//     }).then(json => {
//         mostrarNomes(json);
//     })
//     .catch(error => {
//         console.log(error);
//     });
axios(arquivo).then(resp => mostrarNomes(resp.data));

function mostrarNomes(nomes) {
    for (let i = 0; i < 5; i++) {
        const div = document.querySelector('.resultado');
        div.innerHTML += `<p>${nomes[i].nome}</p>`;
    };
};