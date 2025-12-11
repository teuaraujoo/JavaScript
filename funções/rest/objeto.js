function criarPessoa (...hobbies){

    let nome = prompt('Digite o nome:');
    if (nome === ""){
        alert('Obrigatório digitar o nome!');
        return;
    }
    if (nome === null){
        return;
    }
    
    let idade = prompt('Digite a idade');
    if (isNaN(idade) || idade === ""){
        alert('Obrigatório digitar a idade!');
        return;
    }
    if (idade === null){
        return;
    }

    let quantH = Number(prompt('Quantidade de hobbies:'));
    hobbies = [];

    for (i = 0; i < quantH; i++){
        let hobbie = prompt(`Digite o ${i + 1}° hobbie:`);
        hobbies.push(hobbie);
        
        if (hobbie === ""){
            alert('Obrigatorio digitar o hobbie');
            break;
        }
        if (hobbie === null){
            break;
        }
    }

    return obj = {
        nome,
        idade,
        hobbies
    };
}

console.log(criarPessoa());