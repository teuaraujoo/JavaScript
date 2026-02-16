// dar continuidade -> uma loja de dispositivos precisa fazer o cadastro de seus produtos, resolva o problema da loja!

class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligarDispostivo() {
        if (this.ligado){
            console.log(`${this.nome} já está ligado`);
            return 
        };
        this.ligado = true;
    }

    desligarDispostivo() {
        if (!this.ligado) {
            console.log(`${this.nome} já esta desligado`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends /* declaração para criar uma classe filha */  Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome); // equivalente ao .call() -> está chamando a super classe
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends Dispositivo {
    constructor(nome, bateria) {
        super(nome);
        this.bateria = bateria;
    }

        ligarDispostivo() {
        if (this.ligado){
            console.log(`${this.nome} já está ligado`);
            return 
        };
        if (this.bateria < 20) {
            console.log('bateria fraca');
            return;
        }
        this.ligado = true;
    }
} 

// essa classe nao esta ligada a smartphone mas ligada a Dispositivo
class Iphone extends Smartphone {
    constructor(nome, cor, modelo, versao) {
        super(nome, cor, modelo);
        this.versao = versao;
    }
}

const i1 = new Iphone("Iphone", 'azul', '13', '1.0.5');
const s1 = new Smartphone('iphone', 'preto', 'iphone 12');
const d1 = new Dispositivo('celular'); 
const t1 = new Tablet('Samsung Tablet', 15);

t1.ligarDispostivo();
console.log(t1);
console.log(i1);
console.log(s1);
console.log(d1);
