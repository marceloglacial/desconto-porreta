import { ProductList } from '@/components'
import { getProducts, sanitizeQuery } from '@/services'

export default async function SearchResults({
    searchParams,
}: {
    searchParams?: {
        search?: string
    }
}) {
    const query = sanitizeQuery(searchParams)
    const products = await getProducts({ search: query })
    const allProducts: IProduct[] = products.data
    return (
        <>
            <h2 className=' text-4xl font-bold'>
                Resultados da busca por:
                <span className=' text-red-600 pl-2'>{query}</span>
            </h2>
            <ProductList products={allProducts} />
        </>
    )
}
