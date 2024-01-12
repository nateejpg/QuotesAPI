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


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://quotesapi-c04u.onrender.com/"); // Update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



