import profileImage from '@app/assets/images/profile-image';
import { OnlyClassNameInterface } from '@app/models/interfaces';
import React from 'react';
import cn from 'classnames';
import PortImage from '@app/components/image';
import ExperienceTag from '@app/components/ui/experience-tag';

interface IImageSection extends OnlyClassNameInterface {}

export default function ImageSection({ className }: IImageSection) {
    return (
        <section className={cn('relative flex justify-end', className)}>
            <PortImage src={profileImage} width={1000} />
            <ExperienceTag className="absolute right-[70%] top-[55%]" />
        </section>
    );
}
