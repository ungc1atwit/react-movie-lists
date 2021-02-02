const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("dist"));

app.get('/', (req, res)=>{
    res.status(200).send("This is the server");
})

app.post('/user/:userid', (res, req)=>{
    re.status(200).send();
})

app.listen(port, ()=>{
    console.log(`App running on ${port}`);
})