// Crie a classe abaixo usando Encapsulamento.

// class Conta {
//     constructor(numeroAgencia, numeroConta, saldoInicial) {
//         this._numeroAgencia = numeroAgencia;
//         this._numeroConta = numeroConta;
//         this._saldo = saldoInicial;
//     }

//     get saldo() {
//         return this._saldo;
//     }

//     depositar(valor) {
//         try {
//             if (valor <= 0) {
//                 throw new Error("O valor do depósito deve ser maior que zero.");
//             }
//             this._saldo += valor;
//             console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this._saldo}`);
//         } catch (erro) {
//             console.log("Ocorreu um erro ao depositar: " + erro.message);
//         }
//     }

//     sacar(valor) {
//         try {
//             if (valor <= 0) {
//                 throw new Error("O valor do saque deve ser maior que zero.");
//             }
//             if (valor > this._saldo) {
//                 throw new Error("Saldo insuficiente para realizar o saque.");
//             }
//             this._saldo -= valor;
//             console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this._saldo}`);
//         } catch (erro) {
//             console.log("Ocorreu um erro ao sacar: " + erro.message);
//         }
//     }

//     toString() {
//         return `Agência: ${this._numeroAgencia}, Conta: ${this._numeroConta}, Saldo: ${this._saldo}`;
//     }
// }

// const minhaConta = new Conta("001", "123456-7", 1000);
// minhaConta.depositar(550)
// minhaConta.sacar(200)
// console.log(minhaConta.toString())

class Livro {
    constructor(titulo, autor, editora, ano) {
        this._titulo = titulo;
        this._autor = autor;
        this._editora = editora;
        this._ano = ano
    }

    get titulo() { return this._titulo }
    get autor() { return this._autor }
    get editora() { return this._editora }
    get ano() { return this._ano }

    set titulo(novoTitulo) { return this._titulo = novoTitulo }
    set autor(novoAutor) { return this._autor = novoAutor }
    set editora(novaEditora) { return this._editora = novaEditora }
    set ano(novoAno) { return this._ano = novoAno }

    toString() {
        return `Titulo: ${this.titulo} Autor: ${this.autor} Editora: ${this.editora} Ano: ${this.ano}\n`
    }
}

const meuLivro = new Livro("A volta dos que n foram", "Eu", "Eu LTDA", 2005);
console.log(meuLivro.toString())
meuLivro.titulo = "A volta dos que não foram"
meuLivro.editora = "Google"
console.table({meuLivro})