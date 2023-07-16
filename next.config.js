/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        newNextLinkBehavior: false
    },
    publicRuntimeConfig: {
        PORTFOLIO_DATA_SOURCE_URL: process.env.PORTFOLIO_DATA_SOURCE_URL || 'https://nabinkawan.github.io/bucket/portfolio'
    }
};

module.exports = nextConfig;
