export const getVendors = async (): Promise<IPromise> => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/vendors`, {
            next: { revalidate: 5 },
        })
        const data = await res.json()
        return data
    } catch (e) {
        return {
            data: null,
            message: `Erro ao carregar os produtos. ${e}`,
            status: 'error',
            total: 0,
            page: 0,
            limit: 0,
            totalPages: 0,
        }
    }
}

export const getVendorBySlug = async (slug: string): Promise<IVendor | undefined> => {
    const apiData = await getVendors()
    return apiData.data.find((vendor: IVendor) => vendor.slug === slug)
}
