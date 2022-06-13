import express from "express";
import 'dotenv/config';

const port = 8000 || process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send("This is homepage!");
});

app.get('/env', (req, res) => {
    const envValue = process.env.GOD_FATHER;
    res.send("Hello This is Env File Value : " + envValue);
});


app.listen(port, () => {
    console.log("Listening on port " + port);
})