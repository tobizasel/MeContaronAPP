import express from "express"
const app = express();
import {extraerKeywords} from "./scripts/Keywordextractor.js";

app.get("/api", (req, res) => {

    const tweet = "La NASA anunció que la misión Artemis I completó con éxito su primer vuelo hacia la Luna, marcando un hito histórico."
    //const tweet = getTweets()
    const keyWords = extraerKeywords(tweet)
    return res.json(keyWords)
})

app.listen(5000, () => console.log("se prendio"))