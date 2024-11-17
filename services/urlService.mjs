import crypto from 'crypto';
export const URLShortner = () => {
    const shortUrl = crypto.randomBytes(5).toString('hex');
    return shortUrl;
}