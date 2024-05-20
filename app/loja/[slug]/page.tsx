import { Avatar, ProductList, Text } from '@/components'
import { vendorMessages } from '@/constants'
import { getProductsByVendor, getVendorBySlug } from '@/services'

const Loja = async ({ params }: { params: { slug: string } }) => {
    const vendor = await getVendorBySlug(params.slug)

    if (!vendor) return <div>{vendorMessages.error.message}</div>

    const products = await getProductsByVendor(vendor._id)
    const { image, title } = vendor

    return (
        <>
            <div className='page__header flex gap-4 text-4xl items-center font-bold'>
                <Avatar image={{ src: image.src, alt: title }} />
                <Text variant='h1'>{title}</Text>
            </div>
            <ProductList products={products} />
        </>
    )
}
export default Loja
