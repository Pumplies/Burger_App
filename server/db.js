import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'burger_app',
  password: 'Maximka20051120',
  port: 5432,
});

export default pool;
