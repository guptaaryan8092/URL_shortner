import { generateNanoid } from "../utils/helper.js"
import urlSchema from "../models/short_url.model.js"
import { saveShortUrl } from "../dao/short_url.js"

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl = await generateNanoid(7)
    if(!shortUrl) throw new Error("Short URL generation failed")
    await saveShortUrl(shortUrl,url)
    return shortUrl
}

export const createShortUrlWithUser = async (url,userId) => {
    const shortUrl = await generateNanoid(7)
    await saveShortUrl(shortUrl,url,userId)
    return shortUrl
}