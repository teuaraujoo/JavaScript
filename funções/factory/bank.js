function createAccount(initialBalance){
    return {
        balance: initialBalance,
        set deposit(value){
            return this.balance += value;
        },
        set drawOut(value){
            return this.balance -= value;
        }
    };
};
const c1 = createAccount(1200);

function descisoes(valor, callback){

    const resposta = 'sacar'

    if (resposta === 'sacar'){
        return callback(valor);
    };
};

function callbackDecisoes(valor){
    return c1.drawOut = valor;
};

descisoes(200, callbackDecisoes);

console.log(c1.balance)