export interface Blog {
    title: string;
    excerpt: string;
    date: Date;
    readTime: string;
    slug: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
}