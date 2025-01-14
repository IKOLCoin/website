// next.config.js
const isProd = false;

module.exports = {
	output: 'export', // Enables static HTML export
  reactStrictMode: true,
  assetPrefix: isProd ? '/your-repo-name/' : '', // Replace with your GitHub repository name
  images: {
    unoptimized: true, // Needed if using the Image component
  },
}
