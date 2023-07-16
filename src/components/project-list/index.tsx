import projects, { Project } from '@app/data/projects-data';
import React from 'react';
import AnchorLink from '../ui/links/anchor-link';
import ProjectCard from '../cards/project-card';
import { getAnimatedCards } from '@app/utils/animationUtils';
import LoadingProjectCard from '../cards/loading-project-card';

interface IProjectList {
    isLoading?: boolean;
    projects: Project[];
}

export default function ProjectList({ isLoading, projects }: IProjectList) {
    const getProjectCard = (project: Project) => {
        return (
            <AnchorLink href={`${project.link}`} key={project.number}>
                <ProjectCard project={project} />
            </AnchorLink>
        );
    };
    return (
        <div className="3xl:grid-cols-5 4xl:grid-cols-6 mt-8 grid grid-cols-1 gap-x-8 gap-y-20 pr-44 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {isLoading ? getAnimatedCards(6).map((idx) => <LoadingProjectCard key={idx} />) : projects.map((project) => getProjectCard(project))}
        </div>
    );
}
