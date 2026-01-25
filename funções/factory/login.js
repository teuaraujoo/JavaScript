function criarUsuario(usuario, senha) {
    return {
        usuario,
        senha,
        logado: false,
        login(nome, password) {
            if (this.usuario === nome && this.senha === password) {
                return this.logado = true;
            } else {
                throw new Error('Usuario ou senha incorretos');
            }
        },
        logout() {
            return this.logado = false;
        }
    };
};

function adicionarUsuario(nome, senha) {
    let users = [];
    const novoUsuario = criarUsuario(nome, senha);
    users.push(novoUsuario);
    return users;
};

console.log(adicionarUsuario('Mateus', '1234'))




// try {
//     usuario1.login('Mateus', '1234');
//     console.log(usuario1.logado);
// } catch (e){
//     console.log(e.message);
// }