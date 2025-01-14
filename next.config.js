// next.config.js
const isProd = true;

module.exports = {
	output: 'export', // Enables static HTML export
  reactStrictMode: true,
  assetPrefix: isProd ? '/IKOLCoin.github.io/' : '', // Replace with your GitHub repository name
  images: {
    unoptimized: true, // Needed if using the Image component
  },
}
