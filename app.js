const express = require("express")
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');



const quotesData = require('./data.json');

app.use(cors());

app.get('/', (req, res) => {

    res.send(quotesData);

})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})

