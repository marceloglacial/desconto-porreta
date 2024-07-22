interface IVendor {
    _id: string
    title: string
    slug: string
    products?: {
        total?: number
    }
    image: {
        src: string
        alt: string
        width: number
        height: number
    }
}
