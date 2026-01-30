function criarAgenda(){
    return {
        contatos: [], 
        adicionarContato(nome, telefone){
            this.contatos.push({
                nome, 
                telefone
            });
        },
        get ListarContatos(){
            return this.contatos;
        }
    };
};

const agenda = criarAgenda();

agenda.adicionarContato('Mateus', '79988887777');
agenda.adicionarContato('robert', '79988887777');
console.log(agenda.contatos);