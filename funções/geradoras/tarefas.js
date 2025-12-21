function* processarTarefas(tarefas){

    for (t of tarefas){
        yield `Processando: ${t}`;
    }
    return 'Todas as tarefas concluídas'
};

let arr = ['Lavar prato', 'arrumar a cama', 'lavar o banheiro'];
const itc = processarTarefas(arr);

let i = 0;

for (a of processarTarefas(arr)){
    console.log(itc.next().value);
    i++;
    if ( i === arr.length){
        console.log(itc.next());
    }
}