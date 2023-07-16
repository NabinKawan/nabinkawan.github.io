import { OnlyClassNameInterface } from '@app/models/interfaces';
import React from 'react';
import cn from 'classnames';

interface IExperienceTag extends OnlyClassNameInterface {
    experience: number;
}

export default function ExperienceTag({ experience, className }: IExperienceTag) {
    return (
        <div className={cn('rounded-lg bg-black-900 p-2 text-3xl text-white md:text-4xl', className)}>
            {experience}+<span className="text-[10px]">years of experience</span>
        </div>
    );
}
