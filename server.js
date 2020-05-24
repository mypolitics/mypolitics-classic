const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', proxy('https://api.mypolitics.pl/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
