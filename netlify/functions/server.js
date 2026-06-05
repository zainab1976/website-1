const path = require('path');

// Netlify bundles the function under /var/task/netlify/functions — views live at repo root
process.env.LANZAA_ROOT = path.resolve(__dirname, '../..');

const serverless = require('serverless-http');
const app = require('../../server');

exports.handler = serverless(app);
