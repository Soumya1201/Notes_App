import rateLimit from "../config/upstash.js";    
// I mistakenly give the database name in upstash as chat_app

const rateLimiter = async (req, res, next) => {

    try {
        const {success} = await rateLimit.limit("my-limit-key")

        if(!success) {
            return res.status(429).json({message: "Too many requests, please try again laater"})
        }

        next()

    } catch (error) {
        console.log("Rate Limit error", error)
        next(error);
    }

    
}

export default rateLimiter;
