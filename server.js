require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Zanou V2</h1>')
});

app.listen(PORT, () => {
    console.log(`Local host listening ${PORT}`);
});