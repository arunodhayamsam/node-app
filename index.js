const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("Ecs-test")
});

app.listen(80,() => {
    console.log("Server started")
});
