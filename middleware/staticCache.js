module.exports = function staticCacheMiddleware(req, res, next) {
  if (req.path.startsWith('/images/')) {
    res.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
  }
  next();
};
