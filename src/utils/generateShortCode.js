import crypto from "crypto";

const BASE62_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const toBase62 = (buffer) => {
	let value = BigInt(`0x${buffer.toString("hex")}`);

	if (value === 0n) {
		return "0";
	}

	let encoded = "";

	while (value > 0n) {
		const remainder = value % 62n;
		encoded = BASE62_ALPHABET[Number(remainder)] + encoded;
		value = value / 62n;
	}

	return encoded;
};

export const generateShortCode = (length = 8) => {
	const randomBytes = crypto.randomBytes(7);
	return toBase62(randomBytes).slice(0, length);
};