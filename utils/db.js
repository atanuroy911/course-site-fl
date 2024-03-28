import mysql from 'mysql';

export const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name'
});