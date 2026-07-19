import {readFile} from "fs/promises";
import path from "path";
import pool from "./pool.js";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initializeDatabase() {
    const schemaPath = path.join(__dirname, "schema.sql");
    try {
        const sql = await readFile(schemaPath, "utf-8");
        await pool.query(sql);
        console.log("Database initialized successfully");
    }
    catch (error) {
        throw new Error(`Database initialization failed: ${error.message}`);
    }

    
}

export default initializeDatabase;
