import Banner from '@app/components/banner';
import ProjectList from '@app/components/project-list';
import Button from '@app/components/ui/button/button';
import projects from '@app/data/projects-data';
import { getPortfolioServerSideProps } from '@app/ssr/serverSideProps';
import { IGetPortfolioServerSideResponse } from '@app/ssr/types';
import { isEmpty } from '@app/utils/helperUtils';

export default function Home({ portfolio }: IGetPortfolioServerSideResponse) {
    return (
        <div className="w-full">
            <Button color="secondary" className="fixed right-44 z-50 mt-3">
                Contact Me
            </Button>
            <Banner portfolio={portfolio} />
            <div className="space-y-6">
                <div className="text-2xl font-medium">Latest Projects</div>
                <ProjectList projects={portfolio.projects} isLoading={isEmpty(portfolio.projects)} />
            </div>
        </div>
    );
}

export { getPortfolioServerSideProps as getServerSideProps };
