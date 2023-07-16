/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        GITHUB_DATA_SOURCE_URL: process.env.GITHUB_DATA_SOURCE_URL
    }
};

module.exports = nextConfig;
