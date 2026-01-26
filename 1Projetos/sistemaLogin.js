function sistemaLogin() {
    // "banco" com todos os users
    let users = [];

    // Verifica se o usuário já existe
    function verificarUsuario(usuario) {
        return users.find(e => e.usuario === usuario);
    };

    return {
        // Cadastra usuário (nome + senha)
        cadastroUsuario(usuario, senha) {
            // Verifica se o nome do usuário já existe, caso exista lança um erro
            if (verificarUsuario(usuario)) {
                throw new Error('Usuário já existente');
            };

            // O array de usuários armazena o novo usuário
            users.push({
                usuario,
                senha,
                logado: false
            });
        },
        // Login do usuário
        login(nome, senha) {

            // Busca do usuário no array com todos os usuários
            const u = users.find(u => u.senha === senha && u.usuario === nome);

            // caso não encontre o usuário, lança um erro
            if (!u) {
                throw new Error('Usuário ou senha incorretas');
            };

            // retorna a situação do usuário (online = logado = true)
            return u.logado = true;
        },
        // logout do usuário
        logout(nome) {

            // faz a busca do nome do usuário pela função 
            const u = verificarUsuario(nome);
            // retorna a situação do usuário (offline = logado = false);
            return u.logado = false;
        },
        // lista de todos os usuários existentes
        get listarUsuarios() {
            return users.map(e => ({
                usuario: e.usuario,
                logado: e.logado
            }));
        }
    };
};


// IIFE para retirar o sistema do esccopo global
(() => {
    const sistema = sistemaLogin();

    // tentativa de cadastro
    try {
        sistema.cadastroUsuario('Mateus', '1234');
    } catch (e){
        console.error(e);
    };
    
    // tentativa de login 
    try {
        sistema.login('Mateus', '1234');
    } catch (e){
        console.error(e);
    }
    
    // logout 
    try {
        sistema.logout('Mateus');
        // Mensagem de saída do "sistema"
        const timer = setTimeout(() => {
            console.log('Saindo...');
        }, 0);
        setTimeout(() => {
            clearTimeout(timer);
        }, 2000);
    } catch(e){
        // tratamento do erro
    };
    
    console.log(sistema.listarUsuarios);
})();
