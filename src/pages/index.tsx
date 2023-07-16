import Header from '@app/components/app/header';
import Banner from '@app/components/banner';
import ProjectList from '@app/components/project-list';
import Button from '@app/components/ui/button/button';
import AnchorLink from '@app/components/ui/links/anchor-link';
import portfolioData from '@app/data/portfolio-data';
import { getPortfolioServerSideProps } from '@app/ssr/serverSideProps';
import { IGetPortfolioServerSideResponse } from '@app/ssr/types';
import { isEmpty } from '@app/utils/helperUtils';

export default function Home() {
    return (
        <div className="w-full">
            <Header portfolio={portfolioData} className="absolute top-0" />

            <AnchorLink href={`mail-to:${portfolioData.profile.email}`} key="contact-me">
                <Button color="secondary" className="fixed right-10 z-50 mt-3 lg:right-20 xl:right-44">
                    Contact Me
                </Button>
            </AnchorLink>

            <Banner portfolio={portfolioData} className="pl-6 md:pl-10  lg:pl-20 xl:pl-40" />
            <div className="space-y-6 px-6 md:px-10 lg:px-20 xl:px-40">
                <div className="text-lg font-medium md:text-2xl">Latest Projects</div>
                <ProjectList projects={portfolioData.projects} isLoading={isEmpty(portfolioData.projects)} />
            </div>
        </div>
    );
}

// export { getPortfolioServerSideProps as getSataticProps };
