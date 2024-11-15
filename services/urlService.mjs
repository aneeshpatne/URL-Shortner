import crypto from 'crypto';
export const URLShortner = () => {
    const shortUrl = crypto.randomBytes(2).toString('hex');
    return shortUrl;
}