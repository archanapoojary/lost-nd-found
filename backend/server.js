const express = require ("express");

const app = express();

app.get("/hellp" ,(req,res) => {
    res.send("hello from backend");
});

app.listen(5001, () => {
    console.log("server running");
});

