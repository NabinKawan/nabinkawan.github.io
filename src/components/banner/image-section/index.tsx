import { OnlyClassNameInterface } from '@app/models/interfaces';
import React from 'react';
import cn from 'classnames';
import PortImage from '@app/components/image';
import ExperienceTag from '@app/components/ui/experience-tag';
import BouncingAnimation from '@app/animations/bouncing-animation';

interface IImageSection extends OnlyClassNameInterface {
    profileImage: string;
    experience: number;
}

export default function ImageSection({ profileImage, experience, className }: IImageSection) {
    return (
        <section className={cn('relative flex w-full justify-end', className)}>
            <PortImage src={profileImage} />
            <BouncingAnimation className="absolute right-[73%] top-[55%] w-[180px] sm:right-[65%] lg:right-[70%]">
                <ExperienceTag experience={experience} />
            </BouncingAnimation>
        </section>
    );
}
