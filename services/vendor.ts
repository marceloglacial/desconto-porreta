interface IgetVendors {
    data: IVendor[],
    meta: Object
}

const formatVendor = (vendor: ApiVendor): IVendor => {
    const { id, attributes } = vendor;
    const { name, slug, logo } = attributes;
    return {
        id: id.toString(),
        name,
        slug,
        logo: {
            alt: logo.data.attributes.alternativeText || '',
            src: logo.data.attributes.url,
            width: logo.data.attributes.width,
            height: logo.data.attributes.height
        }
    };
}

export const getVendors = async (): Promise<IgetVendors> => {
    const res = await fetch('http://localhost:1337/api/vendors?populate=*')
    if (!res.ok) {
        throw new Error('Loja não encontrada')
    }
    const apiData = await res.json()
    const result = {
        data: apiData.data.map((item: ApiVendor) => formatVendor(item)),
        meta: apiData.meta
    }
    return result
};

export const getSingleVendor = async (id: string): Promise<IVendor | undefined> => {
    const apiData = await getVendors()
    return (
        apiData.data.find((vendor) => vendor.id === id) ||
        undefined
    );
};

export const getVendorBySlug = async (slug: string): Promise<IVendor | undefined> => {
    const apiData = await getVendors()
    return apiData.data.find((vendor) => vendor.slug === slug);
};
