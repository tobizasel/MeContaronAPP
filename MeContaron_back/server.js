const express = require("express")
const app = express();
import extractKeywords from "./scripts/keywordextractor";

app.get("/api", (req, res) => {

    const tweet = "La NASA anunció que un nuevo rover explorará Marte en 2025 para buscar signos de vida."
    //const tweet = getTweets()
    const keyWords = extractKeywords(tweet)
    res.json(keyWords)  

})

app.listen(5000, () => console.log("se prendio"))