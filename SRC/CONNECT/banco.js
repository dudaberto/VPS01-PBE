const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'StockCar'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Banco conectado com sucesso')
})

module.exports = {con}