import { FC } from 'react'
import Image from 'next/image'
import { getCurrency, getDiscount } from '@/services'
import Link from 'next/link'
import { productMessages } from '@/constants'
import { Badge, Button, Text } from '@/components'

export const Card: FC<IProduct> = ({
    _id,
    title,
    vendor_info,
    price,
    image,
    link,
}): JSX.Element => {
    const vendor = vendor_info[0]

    return (
        <div className='card rounded-xl overflow-hidden border border-slate-300 shadow-xl bg-white'>
            <div className='card__image object-contain overflow-hidden p-4  max-h-24 md:max-h-full'>
                <Link href={`/produto/${_id}`}>
                    <figure className='card__figure relative w-full aspect-square overflow-hidden bg-white'>
                        <Image
                            className='card__image object-contain overflow-hidden p-4  max-h-24 md:max-h-full'
                            src={image.src}
                            fill
                            alt={image?.alt || ''}
                            sizes='(max-width: 300px) 100vw, (max-width: 150px) 50vw, 33vw"'
                            priority
                        />
                    </figure>
                </Link>
            </div>
            <div className='card__body p-4 flex flex-col gap-2'>
                <div className='card__title line-clamp-3 md:line-clamp-2'>
                    <Link href={`/produto/${_id}`}>
                        <Text variant='h3'>{title}</Text>
                    </Link>
                </div>
                <Link href={`/produto/${_id}`}>
                    <div className='card__store text-xs text-slate-600 hidden md:block'>
                        <p>vendido por: {vendor.title}</p>
                    </div>
                    <div className='card__price flex flex-col pt-2 font-bold'>
                        {price?.discount && (
                            <div className='card_highlight flex flex-wrap gap-2 items-center'>
                                <span className='card__price--regular text-xs text-lime-600 line-through'>
                                    {getCurrency(price.regular)}
                                </span>
                                <Badge>
                                    {getDiscount(price.regular, price?.discount || 0)}% off
                                </Badge>
                            </div>
                        )}
                        <span className='card__price--discount text-xl'>
                            {getCurrency(price.discount || price.regular)}
                        </span>
                    </div>
                </Link>
                <div className='card__actions'>
                    <Button href={`/redirect?url=${link}`}>{productMessages.ctaButton}</Button>
                </div>
            </div>
        </div>
    )
}
