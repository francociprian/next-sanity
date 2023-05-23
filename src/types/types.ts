export type Gallery = {
    _id: string;
    title: string;
    description: string;
    publishedAt: string;
    image: {
        public_id: string;
        resource_type: string;
        type: string;
        format: string;
        version: number;
        url: string;
        secure_url: string;
        width: number;
        height: number;
        bytes: number;
        duration: null;
        tags: any[];
        context: any;
        created_at: string;
        access_mode: string;
        _version: number;
        _type: string;
    };
};

export type GalleryProps = {
    gallery: Gallery[];
};

export type DragInfo = {
    offset: {
        x: number;
        y: number;
    };
};

export type ImageProps = {
    id: number;
    imageSrc: string;
};