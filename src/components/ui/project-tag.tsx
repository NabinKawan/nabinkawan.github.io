import { OnlyClassNameInterface } from '@app/models/interfaces';
import React from 'react';
import cn from 'classnames';

interface IProjectTag extends OnlyClassNameInterface {
    tagNumber: number;
}

export default function ProjectTag({ tagNumber, className }: IProjectTag) {
    return <div className={cn('rounded-lg bg-black-900 p-2 text-xl text-white md:text-2xl', className)}>0{tagNumber}</div>;
}
