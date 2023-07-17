import PageLoadAnimation from '@app/animations/page-load-animation';
import Header from '@app/components/app/header';
import Banner from '@app/components/banner';
import ProjectList from '@app/components/project-list';
import Button from '@app/components/ui/button/button';
import AnchorLink from '@app/components/ui/links/anchor-link';
import FullScreenLoader from '@app/containers/FullScreenLoader';
import { getPortfolio } from '@app/data/source/github/github-data-source';
import { PortfolioDto } from '@app/models/dtos/portfolioDtos';
import { isEmpty } from '@app/utils/helperUtils';
import { useEffect, useState } from 'react';

export default function Home() {
    const [portfolio, setPortfolio] = useState<PortfolioDto | null>(null);

    const _handleContactMe = () => {
        const recipient = 'nabin.kawan.9@gmail.com';
        const subject = 'Regarding Contact';

        const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${recipient}&su=${subject}`;
        window.open(mailtoUrl);
    };

    useEffect(() => {
        getPortfolio().then((data) => {
            if (data) {
                setPortfolio(data);
            }
        });
    }, []);

    if (!portfolio) return <FullScreenLoader />;

    return (
        <PageLoadAnimation>
            <div className="w-full">
                <Header portfolio={portfolio} className="absolute top-0" />

                <Button color="secondary" className="fixed right-10 z-50 mt-3 lg:right-20 xl:right-44" onClick={_handleContactMe}>
                    Contact Me
                </Button>

                <Banner portfolio={portfolio} className="pl-6 md:pl-10  lg:pl-20 xl:pl-40" />
                <div className="space-y-6 px-6 md:px-10 lg:px-20 xl:px-40">
                    <div className="text-lg font-medium md:text-2xl">Latest Projects</div>
                    <ProjectList projects={portfolio.projects} isLoading={isEmpty(portfolio.projects)} />
                </div>
            </div>
        </PageLoadAnimation>
    );
}
