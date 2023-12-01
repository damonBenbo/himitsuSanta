const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

app.get('/', (req, res) => {
    res.send('Hello, Secret Santa!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});