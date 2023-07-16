import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const env = process.env.NODE_ENV;

console.log(publicRuntimeConfig);
const environments = {
    GITHUB_DATA_URL: publicRuntimeConfig.GITHUB_DATA_URL
};

console.log({ environment: env, github_data_url: environments.GITHUB_DATA_URL });
export default environments;
