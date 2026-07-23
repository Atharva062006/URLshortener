import {
    shortenUrlService
} from "../services/urlService.js";

import { handleResponse } from "../utils/handleResponse.js";

export const shortenUrl = async (req, res) => {
    const url = req.body;

    try {
        const result = await shortenUrlService(url);
        handleResponse(res, 200, "URL shortened successfully", result);
    }
    catch (error) {
        handleResponse(res, 500, "Error shortening URL", { error: error.message  });
    }
}