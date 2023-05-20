/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  /* config options here */
};
 
// module.exports = nextConfig;
module.exports = withContentlayer(nextConfig)
