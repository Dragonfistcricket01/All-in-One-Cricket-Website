const { Pool } = require('pg');
require('dotenv').config();


//--Below is the local one---------------
// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
// });

// pool.on('connect', () => {
//     console.log('✅ Connected to PostgreSQL database')
// });



//--Below is for cloud deployment------------------------
// We use a single 'connectionString' for cloud deployment.
// The 'ssl' part is mandatory for Neon.
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

pool.on('connect', () => {
    console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err) => {
    console.error('❌ Unexpected error on idle database client', err);
    process.exit(-1);
});

module.exports = pool;