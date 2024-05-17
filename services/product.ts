interface GetProductsProps {
    search?: string
}

export const getProducts = async ({ search = '' }: GetProductsProps = {}): Promise<IPromise> => {
    try {
        const searchParam = search ? `&search=${encodeURIComponent(search)}` : ''
        const res = await fetch(`${process.env.API_URL}/api/products?limit=100${searchParam}`, {
            next: { revalidate: 5 },
        })
        const data = await res.json()
        return data
    } catch (e) {
        return {
            data: null,
            message: `Erro ao carregar os produtos. ${e}`,
            status: 'error',
        }
    }
}

export const getSingleProduct = async (id: string): Promise<IPromise> => {
    try {
        const res = await fetch(`${process.env.API_URL}/api/products/${id}`, {
            next: { revalidate: 5 },
        })
        const data = await res.json()
        return data
    } catch (e) {
        return {
            data: null,
            message: `Erro ao carregar o produto. ${e}`,
            status: 'error',
        }
    }
}

export const getProductsByVendor = async (id: string) => {
    const data = await getProducts()
    return data.data.filter((product: IProduct) => product.vendor === id)
}

export function getDiscount(regularPrice: number, finalPrice: number): number {
    const discountPercentage = ((regularPrice - finalPrice) / regularPrice) * 100
    return Math.round(discountPercentage)
}

export const getCurrency = (value: number): string =>
    value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
