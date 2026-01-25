function criarPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    };
};

const p1 = criarPessoa('Luiz', 'Otávio');
console.log(p1);

// função dentro de objeto = método

// ====================================

function friendFactory(friendName) {
    return {
        friendName: friendName,
    };
};

let friendDetails = {
    talk() {
        return (`Olá, eu sou ${this.friendName} .`)
    },
};


let friendOne = friendFactory('Brian');
let friendTwo = friendFactory('Jane');

friendOne.talk = friendDetails.talk;
friendTwo.talk = friendDetails.talk;
console.log(friendOne.talk());
console.log(friendTwo.talk());
