const express = require("express")
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;


const quotesData = require('./data.json');

app.get('/', (req, res) => {

    res.send("Hello World!");

})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})



