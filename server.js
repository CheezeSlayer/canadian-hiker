const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/public/view');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendfile('pages/home.html', {
  });

});

app.get('/pages/about.html', (req, res) => {
  res.sendfile('pages/about.html', {
  });

});

app.get('/pages/home.html', (req, res) => {
  res.sendfile('pages/home.html', {
  });

});

const server = app.listen(3000, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});
