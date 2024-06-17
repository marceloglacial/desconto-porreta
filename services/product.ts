import { productMessages } from '@/constants'

interface GetProductsProps {
    search?: string
    limit?: number
    page?: number
}

export const getProducts = async ({
    search = '',
    limit = productMessages.limit,
    page = 1,
}: GetProductsProps = {}): Promise<IPromise> => {
    try {
        const searchParam = search ? `&search=${encodeURIComponent(search)}` : ''
        const pageParam = page ? `&page=${page}` : ''
        const res = await fetch(
            `${process.env.API_URL}/api/products?limit=${limit}${pageParam}${searchParam}`,
            {
                next: { revalidate: 5 },
            }
        )
        const data = await res.json()
        return data
    } catch (e) {
        return {
            data: false,
            message: `Erro ao carregar os produtos. ${e}`,
            status: 'error',
            total: 0,
            page: 0,
            limit: 0,
            totalPages: 0,
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
            total: 0,
            page: 0,
            limit: 0,
            totalPages: 0,
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
