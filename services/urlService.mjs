import crypto from 'crypto';
export const URLShortner = () => {
    const shortUrl = crypto.randomBytes(4).toString('hex');
    return shortUrl;
}