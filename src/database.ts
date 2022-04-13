import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
    connectionString: process.env.BD_URI,
});

export default connection;
