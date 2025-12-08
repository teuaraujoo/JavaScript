        const Banco = {
            users: [
                {
                    id: 1,
                    nome: "João",
                    email: "joao@example.com",
                },
                {
                    id: 2,
                    nome: "Pedro",
                    email: "pedro@example.com",
                },
                {
                    id: 3,
                    nome: "Maria",
                    email: "maria@example.com",
                },
                {
                    id: 4,
                    nome: "Ana",
                    email: "ana@example.com",
                },
                {
                    id: 5,
                    nome: "Carlos",
                    email: "carlos@example.com",
                }
            ]
        }   
        function verificaID(min = 1, max = 100) {

            let id;
            const usados = Banco.users.map(u => u.id);

            do {
                id = Math.floor(Math.random() * (max - min + 1)) + min;
            } while (usados.includes(id));

            return id;
        }   

        function adicionaUser(nome, email){

            let id = verificaID();

            const user = {id, nome, email}
            Banco.users.push(user);
            // Banco.users.push({
            //     id: id,
            //     nome: nome,
            //     email: email
            // })
            return Banco.users;
        };

        function buscarNome (busca){
            const encotrando = Banco.users.find(u => u.nome === busca);
            return encotrando;
        }
        
        console.log(buscarNome('Carlos'));
        console.log(adicionaUser('Eduardo', 'eduardo@example.com'));
        console.log(Banco);
        console.log(buscarNome('Eduardo'));