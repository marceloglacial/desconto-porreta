import { ProductList } from '@/components'
import { getProducts } from '@/services'

export default async function Home() {
    const products = await getProducts()
    const allProducts: IProduct[] = products.data

    return <ProductList products={allProducts} />
}
