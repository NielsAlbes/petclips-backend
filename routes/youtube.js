import express, { json } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const API_KEY = process.env.YOUTUBE_API_KEY
const CHANNEL_ID = process.env.CHANNEL_ID

router.get("/stats", async (req, res) => {
    try {
        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;
        const response = await axios.get(url);

        const stats = response.data.items[0].statistics;
        res.json({
            subscribers: stats.subscriberCount,
            views: stats.viewCount,
        });
    } catch (error){
        console.error(error);
        res.status(500).json({ message: "error fetching youtube data"});
    }
});

export default router;