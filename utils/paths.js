const path = require('path');
const fs = require('fs');

function resolveProjectRoot() {
  if (process.env.LANZAA_ROOT) {
    return process.env.LANZAA_ROOT;
  }

  const candidates = [
    __dirname,
    path.join(__dirname, '..'),
    path.join(__dirname, '..', '..'),
    process.cwd()
  ];

  for (const dir of candidates) {
    if (fs.existsSync(path.join(dir, 'views', 'index.html'))) {
      return dir;
    }
  }

  return __dirname;
}

module.exports = { resolveProjectRoot };
