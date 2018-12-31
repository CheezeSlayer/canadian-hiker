const express = require('express');

const app = express();

const server = app.listen(3000, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendfile('./views/index.html', {
  });
});

app.get('/pages/about.html', (req, res) => {
  res.sendfile('./pages/about.html', {
  });
});
