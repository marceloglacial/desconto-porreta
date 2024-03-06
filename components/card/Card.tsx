import { FC } from 'react';
import Image from 'next/image';
import ui from '@/ui';
import { getCurrency, getDiscount, getStoreById } from '@/services';
import Link from 'next/link';

export const Card: FC<IProduct> = ({
  id,
  title,
  store,
  price,
  image,
  link,
}): JSX.Element => {
  const vendor = getStoreById(store)
  return (
    <div className={ui.card.container}>
      <div className={ui.card.image}>
        <Link href={`/produto/${id}`}>
          <figure className={ui.card.figure}>
            <Image
              className={ui.card.image}
              src={image.src}
              fill
              alt={image?.alt || ''}
              sizes='(max-width: 300px) 100vw, (max-width: 150px) 50vw, 33vw"'
              priority
            />
          </figure>
        </Link>
      </div>
      <div className={ui.card.body}>
        <div className={ui.card.title}>
          <Link href={`/produto/${id}`}>
            <h2>{title}</h2>
          </Link>
        </div>
        <Link href={`/produto/${id}`}>
          <div className={ui.card.store}>
            <p>vendido por: {vendor?.title}</p>
          </div>
          <div className={ui.card.price.container}>
            {price?.discount && (
              <div>
                <span className={ui.card.price.regular}>
                  {getCurrency(price.regular)}
                </span>
                <span className={ui.card.price.percentageOff}>
                  {getDiscount(price.regular, price?.discount || 0)}% off
                </span>
              </div>
            )}
            <span className={ui.card.price.discount}>
              {getCurrency(price.discount || price.regular)}
            </span>
          </div>
        </Link>
        <div className={ui.card.actions.container}>
          <Link
            href={`/redirect?url=${link}`}
            target='_blank'
            className={ui.button.primary}
          >
            Ir para a loja!
          </Link>
        </div>
      </div>
    </div>
  );
};
