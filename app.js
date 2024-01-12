const express = require("express")
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;


const quotesData = require('./data.json');

app.get('/', (req, res) => {

    res.send(quotesData);

})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})


const cors = require('cors');
app.use(cors({
    origin: 'http://example.com', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))



