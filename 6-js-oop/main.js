// Crie a classe abaixo usando Encapsulamento.

class Conta {
    constructor(numeroAgencia, numeroConta, saldoInicial) {
        this._numeroAgencia = numeroAgencia;
        this._numeroConta = numeroConta;
        this._saldo = saldoInicial;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        try {
            if (valor <= 0) {
                throw new Error("O valor do depósito deve ser maior que zero.");
            }
            this._saldo += valor;
            console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this._saldo}`);
        } catch (erro) {
            console.log("Ocorreu um erro ao depositar: " + erro.message);
        }
    }

    sacar(valor) {
        try {
            if (valor <= 0) {
                throw new Error("O valor do saque deve ser maior que zero.");
            }
            if (valor > this._saldo) {
                throw new Error("Saldo insuficiente para realizar o saque.");
            }
            this._saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this._saldo}`);
        } catch (erro) {
            console.log("Ocorreu um erro ao sacar: " + erro.message);
        }
    }

    toString() {
        return `Agência: ${this._numeroAgencia}, Conta: ${this._numeroConta}, Saldo: ${this._saldo}`;
    }
}

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

class Form {
    constructor(formDOM) {
        this._formDOM = formDOM;
    }

    get formDOM() { return this._formDOM }
    set formDOM(newForm) { this._formDOM = newForm }

    _validateForm(input) {
        try {
            if (input.value === "") {
                throw new Error("Preencha todos os campos!")
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    getData() {
        try {
            const formInputs = document.querySelectorAll(this.formDOM + " input");
            const inputsData = {};

            formInputs.forEach(input => {
                this._validateForm(input);

                inputsData[input.name] = input.value;
            })

            this.formData = inputsData;
            return inputsData;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

class Database {
    constructor() {
        this._bookTable = "bookTable"
    }

    get bookTable() { return this._bookTable }
    set bookTable(newBookTable) { this._bookTable = newBookTable }
    
    checkDb() {
        const report = {};
        const books = localStorage.getItem(this.booksTable);
        const book = localStorage.getItem(this.lastBookTable);

        if(books === null || books === '') {
            report['books'] = false;
        }
        if(book === null || book === '') {
            report['lastBook'] = false;
        }
        return report;
    }

    createTable(tableName) {
        localStorage.setItem(tableName, []);
    }

    getData() {
        try {
            const data = localStorage.getItem(this.bookTable) || '[]';
        
            return JSON.parse(data);
        }
        catch (error) {
            error.message = 'Erro ao pegar os dados!';
            return display_error(error.message);
        }
    }

    addNewBook(book) {
        try {
            const report = this.checkDb();
            let bookshelf = this.getData();

            for(const [key, value] of Object.entries(report)) {
                if(!value) {
                    this.createTable(key);
                    // throw new Error("Tabelas não criadas!");
                }
            };

            bookshelf.push(book)

            localStorage.setItem(this.bookTable, JSON.stringify(bookshelf));

        } catch (error) {
            alert(error.message);
            console.error(error.message);
        }
    }
}

const formBtn = document.querySelector('button[type="submit"');

formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const form = new Form(".form-cadastro");
    const db = new Database();

    let livro = new Livro();
    for(const [key,value] of Object.entries(form.getData())) {
        livro[key] = value;
    }

    db.addNewBook(livro);
});