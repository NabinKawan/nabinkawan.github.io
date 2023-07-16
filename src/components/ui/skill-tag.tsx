import React from 'react';

interface ISkillTag {
    color: string;
    skill: string;
    textColor: string;
}

export default function SkillTag({ color, skill, textColor }: ISkillTag) {
    return (
        <div className="mx-2 my-1 w-fit rounded-md px-2 py-1" style={{ color: textColor, backgroundColor: color }}>
            {skill}
        </div>
    );
}
