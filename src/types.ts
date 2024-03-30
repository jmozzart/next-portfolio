export type ProjectImg = {
    _type: string;
    asset: {
        _type: string;
        _ref: string;
    }
}

export type Project = {
    _id: string;
    name: string;
    description: string;
    image: ProjectImg;
    relatedSkills: string[];
    featured: boolean;
    slug: string;
}