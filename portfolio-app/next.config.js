const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: false,
  images: {
    qualities: [75, 100],
  },
};
 
module.exports = withNextIntl(nextConfig);
