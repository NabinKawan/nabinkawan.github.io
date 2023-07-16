import { OnlyClassNameInterface } from '@app/models/interfaces';
import React from 'react';
import cn from 'classnames';
import PortImage from '@app/components/image';
import ExperienceTag from '@app/components/ui/experience-tag';
import BouncingAnimation from '@app/animations/bouncing-animation';

interface IImageSection extends OnlyClassNameInterface {
    profileImage: string;
}

export default function ImageSection({ profileImage, className }: IImageSection) {
    return (
        <section className={cn('relative flex justify-end', className)}>
            <PortImage src={profileImage} />
            <BouncingAnimation className="absolute right-[70%] top-[55%]">
                <ExperienceTag />
            </BouncingAnimation>
        </section>
    );
}
