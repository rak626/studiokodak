export type NavElement = {
    name: string;
    slug: string;
    page?: string
}

export type ServiceType = {
    category: string;
    name: string;
    imgName: string;
    description: string;
    gallery: string;
}

export type PreparedMessageInput = {
    name: string;
    email?: string;
    phone: string;
    message: string;
};