const Pool = require ("pg").Pool;

const User = new Pool({

    user:"postgres",
    password:"nasrin",
    host:"localhost",
    port:5432,
    database:"register"
});

module.exports = User;