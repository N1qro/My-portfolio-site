const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 100],
  },
};
 
module.exports = withNextIntl(nextConfig);
