import { getPortfolio } from '@app/data/source/github/github-data-source';
import { GetStaticProps } from 'next/types';

export const getPortfolioServerSideProps: GetStaticProps = async (_context: any) => {
    const portfolio = await getPortfolio();
    return { props: { portfolio: portfolio } };
};
