class Table{
    constructor(arr){
        this.header = arr[0];
        arr.shift(); // retirando o primeir arry [0] porque se trata do header da tabela. metodo shift()
        this.rows = arr;
    }


    get RowCount(){
        return this.rows.lenght;
    }

    get ColumnCount(){
        return this.header.lenght;
    }
}

module.exports = Table;