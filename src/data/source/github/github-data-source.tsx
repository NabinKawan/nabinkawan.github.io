import environments from '@app/configs/environments';

export const fetchClient = (queryUrl: string) => {
    const apiUrl = `${environments.PORTFOLIO_DATA_SOURCE_URL}${queryUrl}`;
    return fetch(apiUrl);
};

export const getPortfolio = async () => {
    const portfolioRes = (await fetchClient('/all.json').catch((err: any) => err)) ?? null;
    const data = (await portfolioRes.json().catch((err: any) => err)) ?? null;
    const portfolio = data ?? null;
    return portfolio;
};
