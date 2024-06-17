import { PaginationBar, ProductList } from '@/components'
import { getProducts } from '@/services'

export default async function Home() {
    const products = await getProducts({ page: 1 })
    const allProducts: IProduct[] = products.data
    return (
        <div className='flex flex-wrap gap-8'>
            <ProductList products={allProducts} />
            <PaginationBar page={products.page} totalPages={products.totalPages} />
        </div>
    )
}
