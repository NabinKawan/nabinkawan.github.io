import Header from '@app/components/app/header';
import Banner from '@app/components/banner';
import ProjectCard from '@app/components/cards/project-card';
import ProjectList from '@app/components/project-list';
import Button from '@app/components/ui/button/button';
import projects from '@app/data/projects-data';
import React from 'react';

export default function HomeContainer() {
    return (
        <div className="w-full">
            <Button color="secondary" className="fixed right-44 z-50 mt-3">
                Contact Me
            </Button>
            <Banner />
            <div className="space-y-6">
                <div className="text-2xl font-medium">Latest Projects</div>
                <ProjectList isLoading projects={projects} />
            </div>
        </div>
    );
}
