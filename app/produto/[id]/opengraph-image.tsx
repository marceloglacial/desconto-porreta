import { getSingleProduct } from '@/services';
import { ImageResponse } from 'next/og'

export const alt = 'About Acme'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { id: string } }) {
    const data = await getSingleProduct(params.id);
    const product: IProduct = data.data


    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 48,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {product.title}
            </div>
        ),
        {
            ...size,
        }
    )
}
