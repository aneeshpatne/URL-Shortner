import { Url } from "../model/Urls.mjs";
import {URLShortner} from "../services/urlService.mjs";
export const shortenURL = async (req, res) =>{
    const {originalUrl} = req.body;
    try{
        const shortUrl = URLShortner();
        const url = await Url.create({originalUrl, shortUrl});
        res.json({shortUrl: url.shortUrl});
    }
    catch(err){
        res.status(500).json({error: 'Server Error'});
    }
};
export const expandURL = async (req, res) =>{
    const {shortUrl} = req.params;
    try{
        const url = await Url.findOne({shortUrl});
        if(url){
            return res.redirect(url.originalUrl);   
        }
        else{
            return res.status(404).json({error: 'URL not found'});
        }

    }
    catch(error){
        res.status(500).json({error: 'Server Error'});
    }
};