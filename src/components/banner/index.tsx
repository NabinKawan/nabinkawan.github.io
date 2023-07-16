import React from 'react';
import Button from '../ui/button/button';
import Header from '../app/header';
import IntroSection from './intro-section';
import ImageSection from './image-section';

export default function Banner() {
    return (
        <div className="relative flex w-full ">
            <IntroSection className="w-1/4 py-32" />
            <ImageSection className="absolute w-3/4" />
        </div>
    );
}
