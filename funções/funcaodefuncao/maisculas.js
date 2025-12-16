const converte = (palavras) => {

    const maisculas = pal => {
        return pal.map(p => p.toUpperCase());
    };
    
    return maisculas(palavras);
}

let arr = ['matesu', 'joao', 'Gabriela', 'FlAvIA'];

console.log(converte(arr));