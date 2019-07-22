const express = require("express");
const app = express();
const parser = require("body-parser");
const path = require("path");
const cors = require("cors");
const axios = require('axios');
const port = process.env.PORT || 3001


app.use(cors());
app.use(parser.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname + "/../dist")));

app.get('/api/bpi', (req, res) => {
    axios('https://api.coindesk.com/v1/bpi/historical/close.json')
        .then(data => {
            // console.log(data.data)
            res.send(data.data);
        })
        .catch(err => console.log(err));
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});


app.listen(port, () => {
    console.log(`connected to the server:${port}`);
});


