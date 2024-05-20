import { Card } from '@/components'
import { productMessages } from '@/constants'
import { getProducts, sanitizeQuery } from '@/services'
import ui from '@/ui'

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
        <div className={ui.layout.homePage.container}>
            <div className={ui.layout.homePage.content}>
                <h2 className=' text-4xl font-bold'>
                    Resultados da busca por:
                    <span className=' text-red-600 pl-2'>{query}</span>
                </h2>
                <div className={ui.layout.homePage.products}>
                    {!allProducts.length && <div>{productMessages.emptyList}</div>}
                    {allProducts?.map((product) => {
                        return <Card key={product._id} {...product} />
                    })}
                </div>
            </div>
        </div>
    )
}
