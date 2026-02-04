const produto = {
    nome: 'Caneta',
    preco: 1.2
}

// Observando as descrições da propriedade
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Modificando as descrições da propriedade
Object.defineProperty(produto, "nome", {
    writable: false,
    enumerable: false
});

// log no objeto
console.log(produto);
// log nas descrições da propriedade
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));