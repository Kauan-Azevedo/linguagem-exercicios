let product_list = [
    { "nome": "Maçã", "preço": 10.00, "validade": true },
    { "nome": "Banana", "preço": 7.50, "validade": true },
    { "nome": "Laranja", "preço": 15.00, "validade": true },
    { "nome": "Pêra", "preço": 12.50, "validade": true },
    { "nome": "Uva", "preço": 20.00, "validade": true },
    { "nome": "Melancia", "preço": 50.00, "validade": true },
    { "nome": "Abacaxi", "preço": 35.00, "validade": true },
    { "nome": "Morango", "preço": 40.00, "validade": true },
    { "nome": "Manga", "preço": 25.00, "validade": true },
    { "nome": "Kiwi", "preço": 27.50, "validade": true },
    { "nome": "Pêssego", "preço": 22.50, "validade": true },
    { "nome": "Amora", "preço": 30.00, "validade": true },
    { "nome": "Cereja", "preço": 32.50, "validade": true },
    { "nome": "Mirtilo", "preço": 35.00, "validade": true },
    { "nome": "Abóbora", "preço": 20.00, "validade": true },
    { "nome": "Cenoura", "preço": 15.00, "validade": true },
    { "nome": "Brócolis", "preço": 17.50, "validade": true },
    { "nome": "Alface", "preço": 12.50, "validade": true },
    { "nome": "Espinafre", "preço": 17.50, "validade": true },
    { "nome": "Tomate", "preço": 10.00, "validade": true },
    { "nome": "Batata", "preço": 7.50, "validade": true },
    { "nome": "Cebola", "preço": 5.00, "validade": true },
    { "nome": "Alho", "preço": 2.50, "validade": true },
    { "nome": "Pimentão", "preço": 15.00, "validade": true },
    { "nome": "Couve-flor", "preço": 20.00, "validade": true },
    { "nome": "Abobrinha", "preço": 17.50, "validade": true },
    { "nome": "Berinjela", "preço": 22.50, "validade": true },
    { "nome": "Quiabo", "preço": 12.50, "validade": true },
    { "nome": "Chuchu", "preço": 10.00, "validade": true },
    { "nome": "Beterraba", "preço": 15.00, "validade": true },
    { "nome": "Abacate", "preço": 30.00, "validade": true },
    { "nome": "Aspargos", "preço": 40.00, "validade": true },
    { "nome": "Rúcula", "preço": 17.50, "validade": true },
    { "nome": "Ervilha", "preço": 12.50, "validade": true },
    { "nome": "Milho", "preço": 15.00, "validade": true },
    { "nome": "Cogumelo", "preço": 25.00, "validade": true },
    { "nome": "Batata-doce", "preço": 22.50, "validade": true },
    { "nome": "Couve", "preço": 17.50, "validade": true },
    { "nome": "Pimenta", "preço": 10.00, "validade": true },
    { "nome": "Repolho", "preço": 12.50, "validade": true },
    { "nome": "Nabo", "preço": 15.00, "validade": true },
    { "nome": "Rabanete", "preço": 10.00, "validade": true },
    { "nome": "Agrião", "preço": 17.50, "validade": true },
    { "nome": "Lentilha", "preço": 20.00, "validade": true },
    { "nome": "Grão-de-bico", "preço": 15.00, "validade": true },
    { "nome": "Feijão", "preço": 12.50, "validade": true },
    { "nome": "Arroz", "preço": 25.00, "validade": true },
    { "nome": "Macarrão", "preço": 17.50, "validade": true },
    { "nome": "Farinha de trigo", "preço": 20.00, "validade": true },
    { "nome": "Azeite de oliva", "preço": 35.00, "validade": true },
    { "nome": "Óleo de soja", "preço": 20.00, "validade": true },
    { "nome": "Vinagre", "preço": 10.00, "validade": true },
    { "nome": "Sal", "preço": 5.00, "validade": true },
    { "nome": "Açúcar", "preço": 10.00, "validade": true },
    { "nome": "Café", "preço": 40.00, "validade": true },
    { "nome": "Chá", "preço": 30.00, "validade": true },
    { "nome": "Leite", "preço": 20.00, "validade": true },
    { "nome": "Queijo", "preço": 35.00, "validade": true }
];

const only_fresh = product_list.filter(prod => {return prod.validade === true})
const only_rotten = product_list.filter(prod => { return prod.validade === false  })
const only_cheap = product_list.filter(prod => {return prod.preço >= 3.75 && prod.preço <= 17.25})
const only_cheap_and_fresh = product_list.filter(prod => {
    return prod.preço >= 10.75 && prod.preço <= 21.99 && prod.validade === true 
})

let listaDeAlunos = [
    { nome: "Ana Silva", media: 9.0 },
    { nome: "João Santos", media: 8.5 },
    { nome: "Maria Oliveira", media: 9.5 },
    { nome: "Pedro Souza", media: 8.8 },
    { nome: "Carla Almeida", media: 9.2 },
    { nome: "Mariana Pereira", media: 8.7 },
    { nome: "Luiz Costa", media: 9.1 },
    { nome: "Fernanda Lima", media: 8.9 },
    { nome: "Rafael Gomes", media: 9.3 },
    { nome: "Juliana Martins", media: 8.6 },
    { nome: "Felipe Santos", media: 8.2 },
    { nome: "Aline Pereira", media: 9.7 },
    { nome: "Lucas Oliveira", media: 2.4 },
    { nome: "Mariana Alves", media: 1.0 },
    { nome: "Gabriel Silva", media: 6.9 },
    { nome: "Laura Costa", media: 9.5 },
    { nome: "Diego Souza", media: 8.3 },
    { nome: "Camila Santos", media: 9.2 },
    { nome: "Rafaela Oliveira", media: 8.7 },
    { nome: "José Silva", media: 5.1 },
    { nome: "Carolina Almeida", media: 8.6 },
    { nome: "Rodrigo Pereira", media: 9.3 },
    { nome: "Amanda Costa", media: 8.5 },
    { nome: "Gustavo Lima", media: 9.0 },
    { nome: "Marina Gomes", media: 3.9 },
    { nome: "Pedro Martins", media: 9.4 },
    { nome: "Isabela Santos", media: 8.2 },
    { nome: "Bruno Oliveira", media: 9.7 },
    { nome: "Larissa Alves", media: 8.4 },
    { nome: "Thiago Silva", media: 9.0 },
];

listaDeAlunos = JSON.stringify(listaDeAlunos)

let alunos_aprovados, alunos_reprovados, melhores_alunos, piores_alunos = []

alunos_aprovados = JSON.parse(listaDeAlunos).filter(aluno => { return aluno.media >= 7.0 })
alunos_reprovados = JSON.parse(listaDeAlunos).filter(aluno => { return aluno.media < 7.0 })

melhores_alunos = JSON.parse(listaDeAlunos).filter(aluno => { return aluno.media >=9.5 })
piores_alunos = JSON.parse(listaDeAlunos).filter(aluno => { return aluno.media < 3.50 })

console.table(melhores_alunos)
console.table(piores_alunos)