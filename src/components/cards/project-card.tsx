import React from 'react';
import cn from 'classnames';
import PortImage from '../image';
import { ProjectDto } from '@app/models/dtos/projectDtos';
import HoverScaleUpAnimation from '@app/animations/hover-scale-up-animation';
import ProjectTag from '../ui/project-tag';

interface IProjectCardProps {
    project: ProjectDto;
    className?: string;
}

export default function ProjectCard({ project, className }: IProjectCardProps) {
    return (
        <div className={cn('project-card group relative h-60 w-80 space-y-3', className)}>
            <HoverScaleUpAnimation>
                <PortImage src={project.image} className="rounded-xl" />
            </HoverScaleUpAnimation>

            <p className="text-sm font-medium">{project.name}</p>
            <ProjectTag tagNumber={project.number} className="absolute -bottom-5 -right-5 group-hover:animate-pulse" />
        </div>
    );
}
