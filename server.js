require('dotenv').config();
const express = require('express');
require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 4000;
const app = express();

////////////////////// MIDDLEWARE

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// CORS
app.use(cors());
// ROUTES
app.use('/zanou2api/v1/users', routes.users);
app.use('/zanou2api/v1/posts', routes.posts);
app.use('/zanou2api/v1/auth', routes.auth);

// HOME ROUTE
app.get('/', (req, res) => {
    res.send('<h1>Zanou V2</h1>')
});

app.listen(PORT, () => {
    console.log(`Local host listening ${PORT}`);
});