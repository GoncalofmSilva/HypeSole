import mysql from 'mysql';

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Goncalo20",
  database: "HypeSole"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

export default con;