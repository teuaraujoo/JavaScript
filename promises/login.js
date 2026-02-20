function validarUsuario(user) {
    return new Promise((resolve, reject) => {
        if (user.senha === 1234 && user.nome === 'Mateus') {
            resolve('user enccontrado');
        } 
        reject('senha incorreta');
    }); 
};

function buscarPerfil() {
    user = dados();
    return new Promise((resolve, reject) => {
        user.map(e => {
            if (e.nome === 'Mateus') {
                if (e.perfil === 'admin') {
                    resolve('Perfil correto');
                };
            };
        });
        reject('Perfil incorreto');
        return false;
    });
};

function dados() {
    const nome = 'Mateus';
    const senha = 1234;
    const perfil = 'admin';

    return user = {
        nome,
        senha,
        perfil
    };
};

function login() {
    return new Promise((resolve, reject) => {
        if (buscarPerfil()) {
            resolve('buscando perfil...');
        }
        reject('perfil não encontrado');
    });
};

login().then(resposta => {
    console.log(resposta);
    return validarUsuario(dados());
}).then(resposta => {
    console.log(resposta);
    return buscarPerfil();
}).then(resposta => {
    console.log(resposta);
})
