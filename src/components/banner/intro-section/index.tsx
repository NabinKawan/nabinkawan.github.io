import Button from '@app/components/ui/button/button';
import { OnlyClassNameInterface } from '@app/models/interfaces';
import React from 'react';
import cn from 'classnames';
import skills from '@app/data/skills-data';
import SkillTag from '@app/components/ui/skill-tag';
import profileDescription from '@app/data/description-data';

interface IIntroSection extends OnlyClassNameInterface {}

export default function IntroSection({ className }: IIntroSection) {
    return (
        <section className={cn('flex flex-col space-y-14', className)}>
            <div className="space-y-4 font-extralight">
                <div className="text-6xl">
                    My name is <span className="font-medium">{profileDescription.name}</span>
                </div>
                <div className="text-xs font-extralight">{profileDescription.description}</div>
                <Button className="!text-[10px]">Hire me</Button>
            </div>
            <div className="flex flex-wrap text-sm">
                {skills.map((e) => (
                    <SkillTag color={e.color} skill={e.skill} textColor={e.textColor} />
                ))}
            </div>
        </section>
    );
}
