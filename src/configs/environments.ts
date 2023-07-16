import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const env = process.env.NODE_ENV;

console.log(publicRuntimeConfig);
const environments = {
    PORTFOLIO_DATA_SOURCE_URL: publicRuntimeConfig.PORTFOLIO_DATA_SOURCE_URL
};

console.log({ environment: env, github_data_url: environments.PORTFOLIO_DATA_SOURCE_URL });
export default environments;
