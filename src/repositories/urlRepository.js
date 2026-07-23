import pool from "../database/pool.js";

export const createUrl = async (url, shortUrl) => {
    const result = await pool.query("INSERT INTO urls (url, short_url) VALUES ($1, $2)", [url, shortUrl]);
    return result.rows[0];
}