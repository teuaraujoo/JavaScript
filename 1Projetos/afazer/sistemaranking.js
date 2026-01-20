// cadastrar jogadores ✅
// verificar senha ✅
// verificar email - já existe? 
// cadastrar pontos

const users = [];

// Verificação da senha -> Tamanho, caractere especial, maísculo e minúsculo e números (0 a 9)
const passwordVerify = (pass) => {

    if (pass.length < 8) return false;
    if (!/[!@#$%&*]/.test(pass)) return false;
    if (!/[A - Z]/.test(pass)) return false;
    if (!/[a - z]/.test(pass)) return false;
    if (!/[0-9]/.test(pass)) return false;

    return true;
};

// criação do usuário -> push no array principal (users)
const createUser = (name, email, password) => {

    return users.push({
        name: name,
        email: email,
        password: password
    });
};

function registerUser() {

    const NAME = 'Mateus';
    const EMAIL = 'mateus@email.com';
    const PASSWORD = 'aA3xya';
    if (!passwordVerify(PASSWORD)){
        console.log('Senha inválida');
        return;
    };


    return createUser(NAME, EMAIL, PASSWORD);
};

registerUser();
console.log(users);
