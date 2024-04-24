interface IgetVendors {
    data: IVendor[],
    meta: Object
}

export const getVendors = async (): Promise<IPromise> => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/vendors`, { next: { revalidate: 5 } })
        const data = await res.json()
        return data
    } catch (e) {
        return {
            data: null,
            message: `Erro ao carregar os produtos. ${e}`,
            status: 'error'
        }
    }
};


export const getVendorBySlug = async (slug: string): Promise<IVendor | undefined> => {
    const apiData = await getVendors()
    return apiData.data.find((vendor: IVendor) => vendor.slug === slug);
};
