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
		if (process.env.NODE_ENV === 'local') {
			return [
				{
					source: '/server/:path*',
					destination: `${process.env.NEXT_PUBLIC_API_URL}/server/:path*`,
				},
			]
		} else return []
	}
}