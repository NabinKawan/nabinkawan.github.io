import React from 'react';
import cn from 'classnames';
import PortImage from '../image';
import { Project } from '@app/data/projects-data';

interface IProjectCardProps {
    project: Project;
    className?: string;
}

export default function ProjectCard({ project, className }: IProjectCardProps) {
    return (
        <div className={cn('product-box relative h-60 w-80 space-y-3', className)}>
            <PortImage src={project.image} className={cn('rounded-xl border object-fill')} width={250} height={200} />
            <p className="text-sm">{project.name}</p>
            <div className={`absolute -bottom-5 -right-5 rounded-lg bg-black-900 p-2 text-2xl text-white`}>0{project.number}</div>
        </div>
    );
}
