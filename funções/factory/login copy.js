function sistemaLogin() {
    let users = [];

    function verificarUsuario(usuario) {
        return users.find(e => e.usuario === usuario);
    };

    return {
        cadastroUsuario(usuario, senha) {
            if (verificarUsuario(usuario)) {
                throw new Error('Usuário já existente');
            };

            users.push({
                usuario,
                senha,
                logado: false
            });
        },
        login(nome, senha) {

            const u = users.find(u => u.senha === senha && u.usuario === nome);

            if (!u) {
                throw new Error('Usuário ou senha incorretas');
            };

            return u.logado = true;
        },
        logout(nome) {

            const u = verificarUsuario(nome);
            return u.logado = false;
        },
        get listarUsuarios() {
            return users.map(e => ({
                usuario: e.usuario,
                logado: e.logado
            }));
        }
    };
};

function inicializarSistema() {
    const sistema = sistemaLogin();
    
    const clickCadastro = true;
    const clickLogin = true;
    const clickLogout = true;
    
    if (clickCadastro){
        let NOME = 'Mateus';
        let SENHA = '1234';

        try {
            entradaDeDados(NOME, SENHA);
        } catch (e){
            console.log(e.message);
        };
    };

    function entradaDeDados(nome, senha) {
        return sistema.cadastroUsuario(nome, senha);
    };

    function botaoLogin(nome, senha) {
        return {
            click(){
                sistema.login(nome, senha);
            },
            clickLogout(nome){
                return sistema.logout(nome);
            }
        };
    };
    
    if (clickLogin) {
        let NOME = 'Mateus';
        let SENHA = '1234';
        try {
            botaoLogin(NOME, SENHA).click();
        } catch(e){
            console.log(e.message);
        }
        if (clickLogout){
            try {
                botaoLogin(NOME, SENHA).clickLogout(NOME);
            } catch(e){
                console.log(e.message);
            };
        };
    };

    return sistema.listarUsuarios;
};

console.log(inicializarSistema());
