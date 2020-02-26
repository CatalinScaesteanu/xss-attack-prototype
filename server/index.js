const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const clientLocalStoarge = req.query.localStorage;
  const clientCookie = req.query.cookie;
  res.json({
    message: 'hello from server, something bad happened',
    localStorage: clientLocalStoarge,
    cookie: clientCookie
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
