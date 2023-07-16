import profileDescription from '@app/data/description-data';
import { OnlyClassNameInterface } from '@app/models/interfaces';
import React from 'react';
import cn from 'classnames';

export default function ExperienceTag({ className }: OnlyClassNameInterface) {
    return (
        <div className={cn('rounded-lg bg-black-900 p-2 text-3xl text-white md:text-4xl', className)}>
            {profileDescription.experience}+<span className="text-[10px]">years of experience</span>
        </div>
    );
}
