import mongoose from "mongoose";
const schema = new mongoose.schema({   
    longUrl: String,
    shortUrl: {type: String, unique: true},
    createdAt: {
        type: Date,
        default: Date.now
    }

})
export const Url = mongoose.model('Url', schema);