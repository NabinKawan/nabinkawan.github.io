import React from 'react';

interface ISkillTag {
    color: string;
    skill: string;
    textColor: string;
}

export default function SkillTag({ color, skill, textColor }: ISkillTag) {
    return (
        <div className="my-1 mr-3 w-fit rounded-md px-2 py-1 text-base" style={{ color: textColor, backgroundColor: color }}>
            {skill}
        </div>
    );
}
1;
