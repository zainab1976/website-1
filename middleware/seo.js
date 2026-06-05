const routeSeo = {
  '/': {
    keywords: 'LANZAA, Onion Hair Oil, hair fall control, hair growth, luxury hair care, Pakistan'
  },
  '/product': {
    keywords: 'LANZAA Onion Hair Oil, buy hair oil, natural ingredients, hair growth oil, Pakistan'
  },
  '/about': {
    keywords: 'LANZAA brand, hair care company, Lahore, natural beauty, premium hair oil'
  },
  '/contact': {
    keywords: 'contact LANZAA, order WhatsApp, hair oil Lahore, LANZAA customer support'
  }
};

module.exports = function seoMiddleware(req, res, next) {
  const config = routeSeo[req.path] || {};
  res.locals.canonicalUrl = `${req.protocol}://${req.get('host')}${req.path}`;
  res.locals.pageKeywords = config.keywords || 'LANZAA, Onion Hair Oil, hair care, Pakistan';
  next();
};
