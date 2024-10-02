const { Client } = require('pg');

const client = new Client({
  user: 'postgres',          // replace with your PostgreSQL user
  host: 'localhost',
  database: 'my_database',  // replace with your database name
  password: '123456',   // replace with your PostgreSQL password
  port: 5432,               // default PostgreSQL port
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;
