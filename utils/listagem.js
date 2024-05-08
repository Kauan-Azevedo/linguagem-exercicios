class Lista {
    constructor(listaDOM) {
        this.listaDOM = listaDOM;
    }

    getData(tableName) {
        const db = new Database(tableName);
        return db.getData();
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
}

export default Lista;