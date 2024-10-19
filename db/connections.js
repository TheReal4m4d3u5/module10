const { POOL } = require('pg');
const pool = new POOL({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'employee_tracker_db',
    port: 5432
});
MediaSourceHandle.exports = pool;


