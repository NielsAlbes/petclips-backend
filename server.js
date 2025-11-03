import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import youtubeRoutes from "./routes/youtube.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/youtube", youtubeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server running on port 5000"));
