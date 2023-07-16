import { ProjectDto } from './projectDtos';

export interface ProfileDescriptionDto {
    name: string;
    description: string;
    experience: number;
}
export interface SkillDto {
    skill: string;
    color: string;
    textColor: string;
}

export interface PortfolioDto {
    description: ProfileDescriptionDto;
    skills: SkillDto;
    projects: ProjectDto[];
}
