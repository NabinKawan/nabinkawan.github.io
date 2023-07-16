import React from 'react';
import cn from 'classnames';
import PortImage from '../image';
import { ProjectDto } from '@app/models/dtos/projectDtos';

interface IProjectCardProps {
    project: ProjectDto;
    className?: string;
}

export default function ProjectCard({ project, className }: IProjectCardProps) {
    return (
        <div className={cn('product-box relative h-60 w-80 space-y-3', className)}>
            <PortImage src={project.image} className="hover:scale-120 rounded-xl object-cover transition delay-500" />
            <p className="text-sm">{project.name}</p>
            <div className={`absolute -bottom-5 -right-5 rounded-lg bg-black-900 p-2 text-2xl text-white`}>0{project.number}</div>
        </div>
    );
}
