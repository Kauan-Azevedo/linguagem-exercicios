import Database from "./database.js";
class Lista {
    constructor(listaDOM) {
        this.listaDOM = listaDOM;
    }

    getData(tableName) {
        const db = new Database(tableName);
        return db.getData();
    }

    getDataBulk(tableNames) {
        const data = {};

        tableNames.forEach(tableName => {
            data[tableName] = this.getData(tableName);
        });
        return data;
    }

    injectData(tableName) {
        const lista = document.querySelector(this.listaDOM);
        const data = this.getData(tableName);

        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.nome;
            lista.appendChild(li);
        });
    }

    gerarTabela() {
        try {
            const dados = this.getDataBulk(["carrosLista", "caminhaoLista"]);
            if (Object.values(dados).every(array => array.length === 0)) {
                throw new Error("Nenhum dado encontrado!");
            }            
            const tabela = document.createElement('table');
            const cabecalho = document.createElement('thead');
            const corpo = document.createElement('tbody');
    
            const colunas = {};
            for (let lista in dados) {
                for (let item of dados[lista]) {
                    for (let propriedade in item) {
                        colunas[propriedade] = true;
                    }
                }
            }
    
            const cabecalhoLinha = document.createElement('tr');
            for (let coluna in colunas) {
                const th = document.createElement('th');
                th.textContent = coluna;
                cabecalhoLinha.appendChild(th);
            }
            cabecalho.appendChild(cabecalhoLinha);
            tabela.appendChild(cabecalho);
    
            for (let lista in dados) {
                for (let item of dados[lista]) {
                    const tr = document.createElement('tr');
                    for (let coluna in colunas) {
                        const td = document.createElement('td');
                        td.textContent = item[coluna] || '';
                        tr.appendChild(td);
                    }
                    corpo.appendChild(tr);
                }
            }
            tabela.appendChild(corpo);
    
            const listagemDOM = document.querySelector(".listagem");
            console.log(tabela)
            listagemDOM.appendChild(tabela)
        } catch (error) {
            console.error(error);
        }
    }

    updateTabela(tableDOM) {
        const tabela = document.querySelector(tableDOM);
        // const corpo = tabela.querySelector("tbody");
        // corpo.innerHTML = '';
        tabela.remove();
        
        this.gerarTabela();
    }

}

export default Lista;