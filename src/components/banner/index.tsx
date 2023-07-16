import React from 'react';
import Button from '../ui/button/button';
import Header from '../app/header';
import IntroSection from './intro-section';
import ImageSection from './image-section';
import { PortfolioDto } from '@app/models/dtos/portfolioDtos';
import { OnlyClassNameInterface } from '@app/models/interfaces';
import cn from 'classnames';

interface IBanner extends OnlyClassNameInterface {
    portfolio: PortfolioDto;
}

export default function Banner({ portfolio, className }: IBanner) {
    return (
        <div className={cn('relative flex w-full flex-col-reverse overflow-x-hidden md:flex-row', className)}>
            <IntroSection className="w-[80%]  pb-12 sm:w-1/2 sm:py-12 md:w-1/3 md:py-32 lg:w-[30%] xl:w-1/4 " skills={portfolio.skills} profile={portfolio.profile} />
            <ImageSection className="md:2/3 absolute -right-20 top-0 h-[500px] w-full md:right-0 md:h-auto  lg:w-[70%] xl:w-3/4" profileImage={portfolio.profile.image} experience={portfolio.profile.experience} />
        </div>
    );
}
