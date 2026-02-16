class ControleRemoto {
    constructor(tv) {
        this.tv = tv; // chama get/set se tiver
        this.volume = 0;
    }

    // Métodos de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolum() {
        this.volume -= 2.
    }

    // Método estático

    static trocarPilha() {
        console.log('Pilha trocada');
    }
}

// new -> construtor sendo chamado
const c1 = new ControleRemoto('Samsung');
c1.aumentarVolume();
// c1.trocarPilha(); -> Error
ControleRemoto.trocarPilha();