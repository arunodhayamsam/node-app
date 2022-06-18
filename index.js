const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Hello World from dev!")
});

app.listen(8081,() => {
    console.log("Server started")
});
