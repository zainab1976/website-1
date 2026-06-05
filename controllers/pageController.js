const {
  product,
  heroImages,
  productImages,
  highlights,
  benefits,
  keyBenefits,
  ingredients,
  testimonials,
  whyLanzaa,
  timeline,
  missionVision
} = require('../models/product');

const baseData = {
  product,
  heroImages,
  productImages,
  highlights,
  benefits,
  keyBenefits,
  ingredients,
  testimonials,
  whyLanzaa,
  timeline,
  missionVision,
  currentYear: new Date().getFullYear()
};
const seoKeywords = {
  home: 'LANZAA, Onion Hair Oil, hair fall control, hair growth, luxury hair care, Pakistan',
  product: 'LANZAA Onion Hair Oil, buy hair oil, natural ingredients, hair growth oil, Pakistan',
  about: 'LANZAA brand, hair care company, Lahore, natural beauty, premium hair oil',
  contact: 'contact LANZAA, order WhatsApp, hair oil Lahore, LANZAA customer support'
};

function renderPage(res, template, data) {
  const req = res.req;
  res.render(template, {
    ...data,
    canonicalUrl: `${req.protocol}://${req.get('host')}${req.path}`,
    pageKeywords: seoKeywords[data.activePage] || 'LANZAA, Onion Hair Oil, hair care, Pakistan'
  });
}

exports.home = (req, res) => {
  renderPage(res, 'index', {
    ...baseData,
    pageTitle: 'LANZAA Onion Hair Oil | Premium Hair Fall Control',
    pageDescription:
      'LANZAA Onion Hair Oil — enriched with onion & almond oil for hair growth, hair fall control, and scalp nourishment. Order on WhatsApp today.',
    activePage: 'home'
  });
};

exports.product = (req, res) => {
  renderPage(res, 'product', {
    ...baseData,
    pageTitle: 'Onion Hair Oil | LANZAA Hair & Skin',
    pageDescription:
      'Discover LANZAA Onion Hair Oil — natural ingredients, proven benefits for hair growth, fall control, and scalp health. 200ml bottle.',
    activePage: 'product'
  });
};

exports.about = (req, res) => {
  renderPage(res, 'about', {
    ...baseData,
    pageTitle: 'About LANZAA | Hair & Skin Care',
    pageDescription:
      'Learn about LANZAA Hair & Skin — a premium Pakistani brand dedicated to natural, effective hair and skin care solutions.',
    activePage: 'about'
  });
};

exports.contact = (req, res) => {
  renderPage(res, 'contact', {
    ...baseData,
    pageTitle: 'Contact LANZAA | Order On WhatsApp',
    pageDescription:
      'Contact LANZAA Hair & Skin. Order Onion Hair Oil via WhatsApp. Email: info.lanzaapk@gmail.com. Located in Johar Town, Lahore.',
    activePage: 'contact'
  });
};
