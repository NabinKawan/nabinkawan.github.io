import Header from '@app/components/app/header';
import Banner from '@app/components/banner';
import ProjectCard from '@app/components/cards/project-card';
import Button from '@app/components/ui/button/button';
import React from 'react';

export default function HomeContainer() {
    return (
        <div>
            <Button color="secondary" className="absolute right-44 z-50 mt-3">
                Contact Me
            </Button>
            <Banner />
            {/* <div className="space-y-6">
                <div className="text-2xl font-medium">Latest Projects</div>
                <div className="flex space-x-14">
                    <ProjectCard image={'/tikeet.jpg'} title="Tikeet" projectNumber={1} />
                    <div className="pt-6">
                        <ProjectCard image={'/fluidensity.jpg'} title="Fluidensity" projectNumber={2} />
                    </div>
                    <div className="pt-10">
                        <ProjectCard image={'/offlinepass.jpg'} title="Offline Pass" projectNumber={3} />
                    </div>
                </div>
            </div> */}
        </div>
    );
}
