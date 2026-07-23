import app from "./app.js"
import dotenv from "dotenv";
import initializeDatabase from "./database/dbinit.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

await initializeDatabase();

app.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`);
});