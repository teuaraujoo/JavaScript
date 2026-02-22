function validarUsuario(user) {
    return new Promise((resolve, reject) => {
        if (user.senha === 1234 && user.nome === 'Mateus') {
            resolve({...user});
        } else {
            return reject('senha incorreta');
        }
    }); 
};

function buscarPerfil(dados) {
    return new Promise((resolve, reject) => {
        const acharPerfil = dados.find(e => e.nome === 'Mateus' && e.perfil === 'admin');

        if (!acharPerfil) {
            return reject('Perfil incorreto');
        }

        resolve(acharPerfil);
    });
};

function dados() {
    const nome = 'Mateus';
    const senha = 1234;
    const perfil = 'admin';

    return {
        nome,
        senha,
        perfil
    };
};

function login() {
    return new Promise((resolve) => {
    setTimeout(() => {
            resolve('inciando login...');
        }, 1000);
    })
};

login().then(resposta => {
    console.log(resposta);
    return validarUsuario(dados());
}).then(resposta => {
    return buscarPerfil([resposta]);
}).then(resposta => {
    console.log('Usuario logado: ', resposta);
})
