const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password: "3llioT*work",
    hot:"localhost",
    port: 5432,
    database :"perntodo"
})

module.exports = pool;