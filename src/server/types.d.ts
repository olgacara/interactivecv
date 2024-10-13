export interface CV {
    id: number;
    cv_label: string;
    template: string;
    basic_info: BasicInfo;
    skills: Skill[];
    experience: Experience[];
    education: Education[];
}

interface BasicInfo {
    firstName: string;
    lastName: string;
    occupation: string;
    tlf: string;
    email: string;
    address: string;
    summary: string;
    photo: string;
}

interface Skill {
    label: string;
    level: string;
}

interface Experience {
    company: string;
    from: string;
    to: string | null;
    position: string;
    description: string;
    projects: Project[];
}

interface Project {
    label: string;
    description: string | null;
}

interface Education {
    institution: string;
    study: string;
}