import { ProductList } from '@/components'
import { productMessages } from '@/constants'
import { getProducts } from '@/services'

export default async function Pagination({ params }: { params: { id: string } }) {
    const pageId = parseInt(params.id)
    const products = await getProducts({ limit: productMessages.limit, page: pageId })
    const allProducts: IProduct[] = products.data
    return <ProductList products={allProducts} page={pageId} totalPages={products.totalPages} />
}
