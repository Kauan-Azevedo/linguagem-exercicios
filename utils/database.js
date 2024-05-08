class Database {
    constructor(tableName) {
        this._tableName = tableName;
    }
    
    get tableName() {
        return this._tableName;
    }

    set tableName(newTableName) {
        this._tableName = newTableName;
    }
    
    checkDb() {
        const table = localStorage.getItem(this._tableName);
        return table === null || table === '';
    }

    createTable() {
        localStorage.setItem(this._tableName, JSON.stringify([]));
    }

    getData() {
        const data = localStorage.getItem(this._tableName) || '[]';
        return JSON.parse(data);
    }

    addNewItem(tableItem) {
        console.log(tableItem);
        if (this.checkDb()) {
            this.createTable();
        }
        const items = this.getData();
        items.push(tableItem);
        localStorage.setItem(this._tableName, JSON.stringify(items));
    }
}

export default Database;