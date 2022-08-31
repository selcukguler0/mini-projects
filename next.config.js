/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["images.unsplash.com"],
	},
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig
