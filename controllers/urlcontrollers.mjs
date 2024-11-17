import { Url } from "../model/Urls.mjs";
import {URLShortner} from "../services/urlService.mjs";
export const shortenURL = async (req, res) =>{
    let {originalUrl} = req.body;
    if (!originalUrl.startsWith('https://')) {
        originalUrl = 'https://' + originalUrl;
    }

    try{
        let fetchURL = await Url.findOne({originalUrl});
        if(fetchURL){
            return res.json({shortUrl: 'https://go.aneeshpatne.com/'+ fetchURL.shortUrl, originalUrl: fetchURL.originalUrl});
        }
        const shortUrl = URLShortner();
        let url = await Url.create({originalUrl, shortUrl});
        res.json({shortUrl:'https://go.aneeshpatne.com/'+ url.shortUrl, originalUrl: url.originalUrl});
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