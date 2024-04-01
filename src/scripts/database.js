import mysql from 'mysql';
import { DB_HOST, DB_USER, DB_PASS, DB_NAME } from './server.js';

const con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

export default con;
