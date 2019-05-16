const express = require('express');
const KeysRouter = require('./Api/router.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/', KeysRouter);

app.listen(3000);