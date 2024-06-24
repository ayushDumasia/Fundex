/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            's3-alpha-sig.figma.com',
            'google.com',
            'www.wallpaperflare.com',
            'justinmind.com',
        ],
    },
};

module.exports = nextConfig;
