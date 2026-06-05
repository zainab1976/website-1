const path = require('path');
const express = require('express');
const routes = require('./routes');
const seoMiddleware = require('./middleware/seo');
const staticCacheMiddleware = require('./middleware/staticCache');
const { resolveProjectRoot } = require('./utils/paths');

const app = express();
const PORT = process.env.PORT || 3000;
const rootDir = resolveProjectRoot();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(rootDir, 'views'));

app.use(seoMiddleware);
app.use(staticCacheMiddleware);
app.use(express.static(path.join(rootDir, 'public')));
app.use('/', routes);

app.use((req, res) => {
  res.status(404).redirect('/');
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`LANZAA website running at http://localhost:${PORT}`);
  });
}

module.exports = app;
