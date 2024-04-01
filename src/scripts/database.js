import mysql from 'mysql';
import { DB_HOST, DB_USER, DB_PASS, DB_NAME } from './server.js';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'Goncalo20%',
  database: 'HypeSole'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

export default con;
