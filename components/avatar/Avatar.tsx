import Image, { ImageProps } from 'next/image'
import { FC } from 'react'

export interface AvatarProps {
    image: ImageProps
}

export const Avatar: FC<AvatarProps> = ({ image }): JSX.Element => {
    return (
        <div className='avatar__container w-16 md:w-24 p-2 md:p-4 aspect-square rounded-full bg-slate-200 overflow-hidden flex items-center justify-center'>
            <figure className='avatar__figure relative w-full h-full'>
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
