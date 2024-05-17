import { Card, SearchBar } from '@/components'
import { productMessages } from '@/constants'
import { getProducts, getSiteInfo } from '@/services'
import ui from '@/ui'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const siteInfo = getSiteInfo()
    return {
        title: siteInfo.title,
        description: siteInfo.description,
        openGraph: {
            title: siteInfo.title,
            description: siteInfo.description,
            url: siteInfo.url,
            siteName: siteInfo.title,
            images: [
                {
                    url: siteInfo.openGraph,
                    width: 800,
                    height: 600,
                    alt: `Logo do site Desconto Porreta`,
                },
            ],
            locale: 'pt_BR',
            type: 'website',
        },
    }
}

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
