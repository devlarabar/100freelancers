/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com',
				port: '',
				pathname: '/**',
			},
		],
	},
	async rewrites() {
		return [
		  {
			source: '/api',
			destination: `${process.env.NEXT_PUBLIC_API_URL}/api`,
		  },
		]
	  },
}