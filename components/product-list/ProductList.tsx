import { FC } from 'react'
import { productMessages } from '@/constants'
import { Card, PaginationBar } from '@/components'

export interface ProductListProps {
    products: IProduct[]
    page: number
    totalPages: number
}
export const ProductList: FC<ProductListProps> = ({ products, page, totalPages }): JSX.Element => {
    const hasPagination = totalPages > 1
    return (
        <div className='products-list flex flex-wrap gap-8'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {!products.length && <div>{productMessages.emptyList}</div>}
                {products?.map((product) => {
                    return <Card key={product._id} {...product} />
                })}
            </div>
            {hasPagination && <PaginationBar page={page} totalPages={totalPages} />}
        </div>
    )
}
