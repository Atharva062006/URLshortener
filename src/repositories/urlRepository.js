import pool from "../database/pool.js";

export const createUrl = async (url, shortCode) => {
    const result = await pool.query("INSERT INTO urls (long_url, short_code) VALUES ($1, $2) RETURNING *", [url, shortCode]);
    return result.rows[0];
}