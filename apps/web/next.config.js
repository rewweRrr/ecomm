const path = require('path');

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@ecomm/ui'],
  output: 'standalone',
  outputFileTracingRoot: path.join(__dirname, '../../')
};
