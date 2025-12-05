O que é um objeto em JavaScript?

Objetos são estruturas que permitem guardar dados organizados em pares chave → valor:

const produto = {
  nome: "Camisa",
  preco: 49.90,
  estoque: 12
}


chave → nome, preco, estoque

valor → "Camisa", 49.90, 12

Objetos são muito usados no mundo real da programação — praticamente tudo em JavaScript envolve objetos.

🎯 Como percorrer um objeto

Para percorrer as propriedades (chaves) de um objeto, você usa:

✔️ for...in
for (let chave in produto) {
  console.log(chave, produto[chave])
}

✔️ Object.keys(obj) – retorna só as chaves
✔️ Object.values(obj) – retorna só os valores
✔️ Object.entries(obj) – retorna chave e valor

Exemplo:

Object.entries(produto).forEach(([chave, valor]) => {
  console.log(chave, valor)
})

🧠 Onde objetos aparecem no desenvolvimento real?
✔️ 1. Respostas de API

Quando você faz um fetch de dados, recebe objetos JSON:

{
  id: 1,
  nome: "Mateus",
  pontos: 120
}

✔️ 2. Configurações

Serviços como Stripe, Supabase, Firebase: tudo é baseado em objetos.

✔️ 3. Modelos de dados em Back-end

Cada item no banco vira um objeto:

const usuario = {
  id: 3,
  email: "mateus@email.com",
  isAdmin: false
};

✔️ 4. Componentes no Front-End

React, Vue, Angular: props e estados são objetos.

✔️ 5. Gerenciamento de estado (Redux, Zustand, etc.)

Estados globais são grandes objetos.

Objetos são a estrutura mais comum em todo desenvolvimento web.

Tem como como colocar um objeto dentro do outro
tem como manipular dados de chaves do objeto
tem como colocar o objeto dentro de uma array