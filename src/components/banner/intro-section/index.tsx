import Button from '@app/components/ui/button/button';
import { OnlyClassNameInterface } from '@app/models/interfaces';
import React from 'react';
import cn from 'classnames';
import SkillTag from '@app/components/ui/skill-tag';
import { SkillDto } from '@app/models/dtos/portfolioDtos';
import { ProfileDto } from '@app/models/dtos/portfolioDtos';

interface IIntroSection extends OnlyClassNameInterface {
    skills: SkillDto[];
    profile: ProfileDto;
}

export default function IntroSection({ skills, profile, className }: IIntroSection) {
    const handleHireMe = () => {
        window.location.href = `mail-to:${profile.email}`;
    };

    return (
        <section className={cn('flex flex-col justify-start space-y-10 md:justify-center', className)}>
            <div className="space-y-4 font-light">
                <div className="text-3xl sm:text-6xl">
                    My name is <span className="font-medium">{profile.name}</span>
                </div>
                <div className="text-xs font-extralight">{profile.description}</div>
                <Button className="!text-[10px]" onClick={handleHireMe}>
                    Hire me
                </Button>
            </div>
            <div className="flex flex-wrap">
                {skills.map((e) => (
                    <SkillTag color={e.color} skill={e.skill} textColor={e.textColor} />
                ))}
            </div>
        </section>
    );
}
