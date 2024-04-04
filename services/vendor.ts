interface IgetVendors {
    data: IVendor[],
    meta: Object
}

const formatVendor = (vendor: ApiVendor): IVendor => {
    const { _id, title, slug, logo } = vendor;
    return {
        id: _id,
        name: title,
        slug,
        logo: {
            alt: '',
            src: logo,
            width: 300,
            height: 300
        }
    };
}

export const getVendors = async (): Promise<IgetVendors> => {
    const res = await fetch(`${process.env.SITE_URL}/api/vendors`)
    if (!res.ok) {
        throw new Error('Loja não encontrada')
    }
    const apiData = await res.json()
    const result = {
        data: apiData.map((item: ApiVendor) => formatVendor(item)),
        meta: apiData?.meta
    }
    return result
};

export const getSingleVendor = async (id: string): Promise<IVendor | undefined> => {
    const apiData = await getVendors()
    return apiData.data.find((vendor) => vendor.id === id);
};

export const getVendorBySlug = async (slug: string): Promise<IVendor | undefined> => {
    const apiData = await getVendors()
    return apiData.data.find((vendor) => vendor.slug === slug);
};
