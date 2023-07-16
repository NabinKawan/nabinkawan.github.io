import React from 'react';
import cn from 'classnames';

interface IProjectCardProps {
    image: string;
    title: string;
    projectNumber: number;
    className?: string;
}

export default function ProjectCard({ image, title, projectNumber, className }: IProjectCardProps) {
    return (
        <div className="relative space-y-3">
            <img src={image} className={cn('rounded-xl border object-fill', className)} width={250} height={200} />
            <p className="text-sm">{title}</p>
            <div className={`absolute -right-5 bottom-6 rounded-lg bg-black-900 p-2 text-2xl text-white`}>0{projectNumber}</div>
        </div>
    );
}
