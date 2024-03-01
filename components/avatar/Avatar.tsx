import ui from '@/ui';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

export interface AvatarProps {
  image: ImageProps;
}

export const Avatar: FC<AvatarProps> = ({ image }): JSX.Element => {
  return (
    <div className={ui.avatar.container}>
      <figure className={ui.avatar.figure}>
        <Image
          {...image}
          className={ui.avatar.image}
          src={image.src}
          fill
          alt={image?.alt || ''}
          sizes='(max-width: 200px) 100vw, (max-width: 100px) 50vw, 33vw"'
        />
      </figure>
    </div>
  );
};
