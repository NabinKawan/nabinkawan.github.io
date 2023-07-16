/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        PORTFOLIO_DATA_SOURCE_URL: process.env.PORTFOLIO_DATA_SOURCE_URL
    }
};

module.exports = nextConfig;
