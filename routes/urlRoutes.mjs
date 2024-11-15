import express from 'express';
const router = express.Router();
import {shortenURL, expandURL} from '../controllers/urlcontrollers.mjs';
router.post('/shorten', shortenURL);
router.get('/:shortUrl', expandURL);
export default router;