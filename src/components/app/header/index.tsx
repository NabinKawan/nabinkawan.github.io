/**
 * The Header component represents the header section of the application layout.
 * It displays the header content.
 */

import React from 'react';
import cn from 'classnames';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';
import { OnlyClassNameInterface } from '@app/models/interfaces';
import AnchorLink from '@app/components/ui/links/anchor-link';
import { PortfolioDto } from '@app/models/dtos/portfolioDtos';

interface IHeaderProps extends OnlyClassNameInterface {
    portfolio: PortfolioDto;
}

export default function Header({ className, portfolio }: IHeaderProps) {
    return (
        <div className={cn('z-50 flex h-20 w-full items-center space-x-4 px-6 py-3 md:px-10 lg:px-20 xl:px-40', className)}>
            <AnchorLink href={portfolio.profile.linkedInLink} key="linkedin">
                <FaLinkedin size={20} color="#0A66C2" />
            </AnchorLink>
            <AnchorLink href={portfolio.profile.githubLink} key="github">
                <FaGithub size={20} color="#000000" />
            </AnchorLink>
            <AnchorLink href={portfolio.profile.repoLink} key="repo">
                <GoRepoForked size={20} color="#FE5B02" />
            </AnchorLink>
        </div>
    );
}
