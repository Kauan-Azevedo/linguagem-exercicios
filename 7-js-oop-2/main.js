import Form from "../utils/form.js";
import Database from "../utils/database.js";
import Lista from "../utils/listagem.js";

class Veiculo {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}

class Carro extends Veiculo {
    constructor(nome, marca, portas) {
        super(nome, marca);
        this.portas = portas;
    }
}

class Caminhao extends Veiculo {
    constructor(nome, marca, eixos) {
        super(nome, marca);
        this.eixos = eixos;
    }
}

const carroBtn = document.querySelector(".add-carro button[type='submit']");
const caminhaoBtn = document.querySelector(".add-caminhao button[type='submit']");

carroBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const form = new Form(".carros form");
    const db = new Database("carrosLista");
    const carroData = form.getData();
    const carro = new Carro(carroData.nome, carroData.marca, carroData.portas);
    db.addNewItem(carro);
});

caminhaoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const form = new Form(".caminhao form");
    const db = new Database("caminhaoLista");
    const caminhaoData = form.getData();
    const caminhao = new Caminhao(caminhaoData.nome, caminhaoData.marca, caminhaoData.eixos);
    db.addNewItem(caminhao);
});