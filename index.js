require('zone.js/dist/zone-node');
require('reflect-metadata');

const fs = require('fs');
const express = require('express');

const {
  renderModuleFactory
} = require('@angular/platform-server');
const {
  AppServerModuleNgFactory
} = require('./dist-server/main.97fa4df9e07d9d9c352d.bundle.js');
const PORT = 4000;
const app = express();

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: fs.readFileSync('./dist/index.html','utf8'),
    url: '/'
  }).then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static('./dist/'));
app.get('*', (req, res) => {
  res.render('index', {
    req
  });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
