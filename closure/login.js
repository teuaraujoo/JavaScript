function sistemaLogin(usuarioV, senhaV){
    function validacao(user, password){
        const situacao = usuarioV === user && senhaV === password;
        if (!situacao){
            throw new ReferenceError('Login inválido');
        };
        
        return 'Login Válido';
    };

    return validacao;
};

const login = sistemaLogin('mateus', '123ioxanfd@901');

try {
    console.log(login('mateus', '123ioxanfd@901'));
} catch(e){
    console.log(e.message);
};