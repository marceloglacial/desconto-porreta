interface ApiVendor {
    id: number;
    attributes: {
        name: string;
        slug: string;
        logo: ApiImage;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface ApiImage {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
                thumbnail: {
                    ext: string;
                    url: string;
                    hash: string;
                    mime: string;
                    name: string;
                    path: string | null;
                    size: number;
                    width: number;
                    height: number;
                    provider_metadata: {
                        public_id: string;
                        resource_type: string;
                    };
                };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: {
                public_id: string;
                resource_type: string;
            };
            createdAt: string;
            updatedAt: string;
        };
    };
}

interface ApiAttributes {
    title: string;
    slug: string;
    link: string;
    priceRegular: number;
    priceDiscount: number;
    createdAt: string;
    updatedAt: string;
    vendor: { data: ApiVendor };
    image: ApiImage;
}

interface ApiProduct {
    id: number;
    attributes: ApiAttributes;
}
