import { getVendors } from '@/services'
import { Avatar } from '@/components'
import Link from 'next/link'

export const VendorsList = async () => {
    const vendors = await getVendors()
    return (
        <div className='flex flex-wrap gap-4'>
            {vendors.data.map((vendor: IVendor) => {
                if (!vendor.products?.total) return
                return (
                    <Link key={vendor._id} href={`/loja/${vendor.slug}`}>
                        <Avatar
                            image={{
                                src: vendor.image.src,
                                alt: vendor.image.alt,
                            }}
                        />
                    </Link>
                )
            })}
        </div>
    )
}
