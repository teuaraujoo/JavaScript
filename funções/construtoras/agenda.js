function Agenda(){

    this.contatos = [];
    this.adicionarContato = (nome, telefone) => {
        this.contatos.push({
            nome,
            telefone
        });
    };
};

const agenda = new Agenda();
agenda.adicionarContato('Mateus', '79988081979');
agenda.adicionarContato('Roberto', '79988081979');
console.log(agenda.contatos);