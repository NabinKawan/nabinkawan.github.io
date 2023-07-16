/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        GITHUB_DATA_URL: process.env.GITHUB_DATA_URL
    }
};

module.exports = nextConfig;
