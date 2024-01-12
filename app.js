const express = require("express")
const app = express();
const port = process.env.PORT || 3000;


app.get('/data.json', (req, res) => {

    res.send({quotes});

})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})



