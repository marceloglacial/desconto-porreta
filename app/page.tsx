import { Card, SearchBar } from '@/components'
import { productMessages } from '@/constants'
import { getProducts } from '@/services'
import ui from '@/ui'

export default async function Home() {
    const products = await getProducts()
    const allProducts: IProduct[] = products.data

    return (
        <div className={ui.layout.homePage.container}>
            <div className={ui.layout.homePage.content}>
                <SearchBar />
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
