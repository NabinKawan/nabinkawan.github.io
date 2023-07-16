import React from 'react';
import AnchorLink from '../ui/links/anchor-link';
import ProjectCard from '../cards/project-card';
import { getAnimatedCards } from '@app/utils/animationUtils';
import LoadingProjectCard from '../cards/loading-project-card';
import { ProjectDto } from '@app/models/dtos/projectDtos';

interface IProjectList {
    isLoading?: boolean;
    projects: ProjectDto[];
}

export default function ProjectList({ isLoading, projects }: IProjectList) {
    const getProjectCard = (project: ProjectDto) => {
        return (
            <AnchorLink href={`${project.link}`} key={project.number}>
                <ProjectCard project={project} />
            </AnchorLink>
        );
    };
    return (
        <div className="3xl:grid-cols-5 4xl:grid-cols-6 grid-c mt-8 grid grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-2 lg:pr-20 xl:grid-cols-3 xl:pr-44">
            {isLoading ? getAnimatedCards(6).map((idx) => <LoadingProjectCard key={idx} />) : projects.map((project) => getProjectCard(project))}
        </div>
    );
}
