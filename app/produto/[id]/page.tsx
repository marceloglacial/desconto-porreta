import { productMessages } from '@/constants'
import { getCurrency, getDiscount, getSingleProduct, getSiteInfo } from '@/services'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { Badge, Button, Text } from '@/components'

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const siteInfo = getSiteInfo()
    const data = await getSingleProduct(params.id)
    const product: IProduct = data.data
    const description: string = `${product.title}: De ${getCurrency(product.price.regular)} ❌ por ${getCurrency(product.price.discount)} 🔥! Acesse já e não perca essa oferta!`
    return {
        title: `${product.title} - ${siteInfo.title}`,
        description: product.description,
        openGraph: {
            title: `${product.title} no ${siteInfo.title}`,
            description: description,
            url: `${siteInfo.url}/produto/${params.id}`,
            siteName: siteInfo.title,
            images: [
                {
                    url: product.image.src,
                    width: 800,
                    height: 600,
                },
                {
                    url: product.image.src, // Dynamic og route
                    width: 1800,
                    height: 1600,
                    alt: `Foto ilustrativa do produto`,
                },
            ],
            locale: 'pt_BR',
            type: 'website',
        },
    }
}

const Produto = async ({ params }: { params: { id: string } }) => {
    const data = await getSingleProduct(params.id)
    const product: IProduct = data.data

    if (data.status === 'error') return <h2>{productMessages.notFound}</h2>

    const { title, image, price, link, description, vendor_info } = product
    const vendor = vendor_info[0]

    return (
        <div className='product__container flex flex-col gap-4'>
            <Text variant='h1'>{title}</Text>
            <div className='product__info grid gap-8 lg:flex'>
                <figure className='product__figure card__figure relative overflow-hidden bg-white border-2 rounded-lg shadow-xl w-full sm:w-96 h-96 lg:shrink-0 mx-auto lg:mx-0'>
                    <Image
                        className='product__image object-contain w-full h-full overflow-hidden p-4'
                        src={image.src}
                        fill
                        alt={image?.alt || ''}
                        sizes='(max-width: 300px) 100vw, (max-width: 150px) 50vw, 33vw"'
                        priority
                    />
                </figure>
                <div className='product__description flex flex-col justify-center gap-4 flex-grow grid-span-2'>
                    <div>{description}</div>
                    <div className='product__vendor text-lg text-slate-600'>
                        <Text>
                            <Link href={`/loja/${vendor.slug}`}>vendido por: {vendor.title}</Link>
                        </Text>
                    </div>
                    <div className='product__price flex flex-col pt-2 gap-4 font-bold'>
                        {price?.discount && (
                            <div className='flex gap-2'>
                                <span className='product__price--discount text-green-600 line-through'>
                                    {getCurrency(price.regular)}
                                </span>
                                <Badge>
                                    {getDiscount(price.regular, price?.discount || 0)}% off
                                </Badge>
                            </div>
                        )}
                        <span className='product__price--regular text-5xl font-bold'>
                            {getCurrency(price.discount || price.regular)}
                        </span>
                    </div>
                    <div className='product__price--button lg:max-w-xs'>
                        <Button href={`/redirect?url=${link}`}>{productMessages.ctaButton}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Produto
