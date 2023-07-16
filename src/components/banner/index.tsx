import React from 'react';
import Button from '../ui/button/button';
import Header from '../app/header';
import IntroSection from './intro-section';
import ImageSection from './image-section';
import { PortfolioDto } from '@app/models/dtos/portfolioDtos';

interface IBanner {
    portfolio: PortfolioDto;
}

export default function Banner({ portfolio }: IBanner) {
    return (
        <div className="relative flex w-full ">
            <IntroSection className="w-1/4 py-32" skills={portfolio.skills} profile={portfolio.profile} />
            <ImageSection className="absolute w-3/4" profileImage={portfolio.profile.image} />
        </div>
    );
}
