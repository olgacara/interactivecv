declare module "@types" {
    interface RequestOptions {
        url: string;
        method?: string; // Optional, typically "GET", "POST", etc.
        headers?: Record<string, string>; // Optional headers, as a key-value pair object
        body?: unknown; // Optional, can be any data type since it will be stringified
        expected?: number[]; // Optional array of expected HTTP status codes
    }

    interface CV {
        id: number;
        cv_label: string;
        template: string;
        basic_info: BasicInfo;
        skills: Skill[];
        experience: Experience[];
        education: Education;
        hobbies: Hobby[];
        languages: Language[];
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
        socials: {
            linkedin?: string;
            github?: string;
        }
    }

    interface Skill {
        label: string;
        level: number;
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
        year: number;
    }

    interface Hobby {
        logo: string;
        info?: {
            heading: string;
            description?: string;
        }
    }

    // Interface for each language
    interface Language {
        label: string;
        level: number; // out of 5
    }
}
