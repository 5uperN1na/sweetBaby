export interface ITestimonial {
    id?: number,
    name?: string,
    quote?: string,
    description?: string,
}

export interface IPhoto {
    src?: string;
    width?: number;
    height?: number;
}

export interface IGallery {
    gallery:
        {
            src?: string;
            width?: number;
            height?: number;
        }
    id?: number;
    name?: string;
    photos?: [
        {
            src?: string;
            width?: number;
            height?: number;
        }
    ]; 
}