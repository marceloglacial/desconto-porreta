import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

export interface AvatarProps {
    image: ImageProps
}

export const Avatar: FC<AvatarProps> = ({ image }): JSX.Element => {
    return (
        <div className='avatar__container w-24 aspect-square rounded-full bg-slate-200 overflow-hidden flex items-center justify-center'>
            <figure className='avatar__figure relative w-16 h-16'>
                <Image
                    {...image}
                    className='avatar__image object-contain'
                    src={image.src}
                    fill
                    alt={image?.alt || ''}
                    sizes='(max-width: 100px) 100vw, (max-width: 750px) 50vw, 33vw"'
                />
            </figure>
        </div>
    )
}
