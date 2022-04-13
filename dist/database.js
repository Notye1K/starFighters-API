import pg from "pg";
var Pool = pg.Pool;
var connection = new Pool({
    connectionString: process.env.BD_URI
});
export default connection;
