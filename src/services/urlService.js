import {
    createUrl 
} from "../repositories/urlRepository.js";

export const shortenUrlService = async (url) => {
    const shortUrl = generateShortUrl();
    const result = await createUrl(url, shortUrl);
    return result;
}