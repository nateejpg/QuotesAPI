const express = require("express")
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;


let quotesData;

// Read the contents of data.json
try {
  const rawData = fs.readFileSync('./data.json');
  quotesData = JSON.parse(rawData);
} catch (error) {
  console.error('Error reading or parsing data.json:', error.message);
  process.exit(1); // Exit the application on error
}

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})



