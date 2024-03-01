import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import ui from '@/ui';
import { getCurrency } from '@/services';

interface CardProps {
  image: ImageProps;
  title: string;
  description: string;
  store: string;
  price: {
    discount?: number;
    regular: number;
  };
  actions?: {
    button: {
      title: string;
      link: string;
    };
  };
}

const Card: FC<CardProps> = ({
  title,
  description,
  store,
  price,
  image,
  actions,
}): JSX.Element => {
  return (
    <div className={ui.card.container}>
      <div className={ui.card.image}>
        <figure className={ui.card.figure}>
          <Image
            className={ui.card.image}
            src={image.src}
            fill
            alt={image?.alt || ''}
          />
        </figure>
      </div>
      <div className={ui.card.body}>
        <div className={ui.card.title}>
          <h2>{title}</h2>
        </div>
        <div className={ui.card.description}>
          <p>{description}</p>
        </div>
        <div className={ui.card.store}>
          <p>{store}</p>
        </div>
        <div className={ui.card.price.container}>
          {price?.discount && (
            <span className={ui.card.price.regular}>
              {getCurrency(price.regular)}
            </span>
          )}
          <span className={ui.card.price.discount}>
            {getCurrency(price?.discount || price.regular)}
          </span>
        </div>
        {actions && (
          <div className={ui.card.actions.container}>
            <button className={ui.button.primary}>
              {actions?.button.title}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
