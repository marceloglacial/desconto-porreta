import { PaginationBar, ProductList, VendorsList } from '@/components'
import { getProducts } from '@/services'

export default async function Home() {
    const products = await getProducts({ page: 1 })
    const allProducts: IProduct[] = products.data
    return (
        <div className='flex flex-wrap gap-4 md:gap-8'>
            <VendorsList />
            <ProductList products={allProducts} />
            <PaginationBar page={products.page} totalPages={products.totalPages} />
        </div>
    )
}
