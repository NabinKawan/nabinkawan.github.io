import { ProjectDto } from './projectDtos';

export interface ProfileDto {
    name: string;
    email: string;
    image: string;
    description: string;
    experience: number;
    githubLink: string;
    linkedInLink: string;
    repoLink: string;
}
export interface SkillDto {
    skill: string;
    color: string;
    textColor: string;
}

export interface PortfolioDto {
    profile: ProfileDto;
    skills: SkillDto[];
    projects: ProjectDto[];
}
