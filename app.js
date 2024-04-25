const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const API_VERSION = "v1"
const port = 1993;

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", async(req, res) => {
    console.log("roots ! bloody roots !")
    res.status(200).send("coucou")
})
app.get("/server/time", async(req, res) => {
    let now = new Date()
    let data = {
        current: now.toISOString()
    }
    console.log("/server/time", data)
    res.status(200).json(data)
})
app.get("/hello/*", async(req, res) => {
    console.log("hello")
    console.log(req.params)
    res.status(200).json({"msg":"Hello " + req.params[0]})
})
// Lancement
console.clear();

app.listen(port, () => {
    console.log("Listening");
});
