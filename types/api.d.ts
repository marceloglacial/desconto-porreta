interface ApiProduct {
    _id: string
    title: string
    description: string
    image: ApiImage
    link: string
    price: ApiPrice
    vendor: string
    vendor_info: ApiVendor[]
}

interface ApiImage {
    src: string
    alt: string
    width?: number
    height?: number
}

interface ApiPrice {
    regular: number
    discount?: number
}

interface ApiVendor {
    _id: string
    title: string
    slug: string
    logo: string
}

interface IPromise {
    total: number
    page: number
    limit: number
    totalPages: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
    message: string
    status: 'success' | 'loading' | 'error'
}
