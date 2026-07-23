import {
    shortenUrlService
} from "../services/urlService.js";

import { handleResponse } from "../utils/handleResponse.js";

export const shortenUrl = async (req, res) => {
    const {url} = req.body;

    if(!url) {
        handleResponse(res, 400, "URL is required", null);
        return;
    }

    try {
        const result = await shortenUrlService(url);
        handleResponse(res, 200, "URL shortened successfully", result);
    }
    catch (error) {
        handleResponse(res, 500, "Error shortening URL", { error: error.message  });
    }
}