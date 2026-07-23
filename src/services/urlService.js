import {
    createUrl 
} from "../repositories/urlRepository.js";

import { generateShortCode } from "../utils/generateShortCode.js";

export const shortenUrlService = async (url) => {
    const maxAttempts = 5;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const code = generateShortCode();
        try {
            const insertedRow = await createUrl(url, code);
            return insertedRow;
        }
        catch (error) {
            if(error.code === '23505') {
                continue;
            }
            else {
                throw error;
            }
        }
    }
    throw new Error("Failed to generate a unique short code after multiple attempts");

}