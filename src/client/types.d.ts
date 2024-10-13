declare module "@types" {
    interface NavigationItem {
        label: string;
        path: string;
        icon?: string;
    }

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
        socials: {
            linkedin?: string;
            github?: string;
        }
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
}
