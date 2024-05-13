interface IProduct {
    _id: string
    title: string
    description?: string
    image: {
        src: string
        alt: string
        width: number
        height: number
    }
    vendor: string
    vendor_info: VendorInfoType[]
    link: string
    price: {
        regular: number
        discount: number
    }
}

type VendorInfoType = {
    _id: string
    title: string
    slug: string
    image: {
        src: string
        alt: string
        width: number
        height: number
    }
}
