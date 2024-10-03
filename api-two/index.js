const express = require('express');
const moment = require('moment');

const app = express();
const port = 9090;

app.get('/', (req, res) => {
  const date = moment().format('LL');
  res.send(`Helo Nodejs<br>${date}`);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`The Server is running on port ${port}`);
});