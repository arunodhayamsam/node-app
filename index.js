const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("test is done with ecs jenkins job and also used to define the tab")
});

app.listen(80,() => {
    console.log("Server started")
});
