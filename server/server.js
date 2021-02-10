const express = require("express");
const app = express();
const port = process.env.PORT;

app.get('/', (req, res)=>{
    res.status(200).send("SERVERR");
})

app.listen(port, ()=>{
    console.log(`App running on ${port}`);
})
