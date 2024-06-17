import { PaginationBar, ProductList } from '@/components'
import { getProducts } from '@/services'

export default async function Pagination({ params }: { params: { id: string } }) {
    const pageId = parseInt(params.id)
    const products = await getProducts({ page: pageId })
    const allProducts: IProduct[] = products.data
    return (
        <div className='flex flex-wrap gap-8'>
            <ProductList products={allProducts} />
            <PaginationBar page={products.page} totalPages={products.totalPages} />
        </div>
    )
}
