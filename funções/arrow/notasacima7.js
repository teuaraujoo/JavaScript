const alunos = [
    {nome: 'Mateus', nota: 9},
    {nome: 'João', nota: 6},
    {nome: 'Araujo', nota: 4},
    {nome: 'Alicia', nota: 9}
];

const acima7 = arr => {
    return arr
    .filter(n => n.nota > 7)
    .map(n => n.nome);
};

console.log(`Alunos com nota acima da média: ${acima7(alunos).join(', ')}`);

// Por que join(', ') funciona?
// join() transforma o array em string
// ', ' define vírgula + espaço como separador