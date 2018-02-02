const pg = require('pg');

module.exports = function () {

/*     const config = {
        user: process.env.POSTGRES_USER || 'postgres',
        host: process.env.POSTGRES_HOST ||'localhost',
        database: process.env.POSTGRES_DATABASE || 'cursosmn',
        password: process.env.POSTGRES_PASSWORD || '123456',
        port: process.env.POSTGRES_PORT || 5432
    }; */

    const config = "postgres://vwjvlkoqhtgisl:4b742fd9cf541ca9fd808b9f8ecc0d7fd6a9bec6000d8c8f877e3873bc3f2a6a@ec2-50-16-231-2.compute-1.amazonaws.com:5432/dbd32abllavehk"

    const db = new pg.Client(config);
    
    db.connect().then(function () {
        console.log('connected on database:', config.database);
    }).catch(function (err) {
        console.log(err);
    })

    return db;
}