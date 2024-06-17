import { ProductList } from '@/components'
import { productMessages } from '@/constants'
import { getProducts } from '@/services'

export default async function Home() {
    const products = await getProducts({ limit: productMessages.limit, page: 1 })
    const allProducts: IProduct[] = products.data
    return <ProductList products={allProducts} page={1} totalPages={products.totalPages} />
}
