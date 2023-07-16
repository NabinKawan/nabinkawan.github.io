import { getPortfolio } from '@app/data/source/github/github-data-source';
import { GetServerSideProps } from 'next/types';

export const getPortfolioServerSideProps: GetServerSideProps = async (_context: any) => {
    const portfolio = await getPortfolio();
    return { props: { portfolio: portfolio } };
};
