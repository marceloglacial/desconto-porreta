import { FC } from 'react'
import { productMessages } from '@/constants'
import { Card } from '@/components'

export interface ProductListProps {
    products: IProduct[]
}
export const ProductList: FC<ProductListProps> = ({ products }): JSX.Element => {
    return (
        <div className='products-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {!products.length && <div>{productMessages.emptyList}</div>}
            {products?.map((product) => {
                return <Card key={product._id} {...product} />
            })}
        </div>
    )
}
