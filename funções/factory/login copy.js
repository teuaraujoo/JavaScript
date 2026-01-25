function sistemaLogin(){    
    let users = [];

    function cadastroUsuario(usuario, senha){

        if (verificarUsuario(usuario)){
            throw new Error('Usuário já existente');
        };

        users.push( {
            usuario, 
            senha, 
            logado: false
        });
        return users;
    };

    function login(nome, senha){

        const u  = users.find(e => e.senha === senha && e.usuario === nome);

        if (!u){
            throw new Error('Usuário ou senha incorretas');
        } else {
            return users.logado = true;
        };
    };

    function logout(nome){

        const u = users.find(e => e.usuario === nome);

        if (u){
            return users.logado = false;
        }
    };

    function verificarUsuario(usuario){
        return users.find(e => e.usuario === usuario);
    };


    return cadastroUsuario();
};