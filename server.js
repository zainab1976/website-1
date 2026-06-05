const path = require('path');
const express = require('express');
const routes = require('./routes');
const seoMiddleware = require('./middleware/seo');
const staticCacheMiddleware = require('./middleware/staticCache');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

app.use(seoMiddleware);
app.use(staticCacheMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.use((req, res) => {
  res.status(404).redirect('/');
});

app.listen(PORT, () => {
  console.log(`LANZAA website running at http://localhost:${PORT}`);
});
