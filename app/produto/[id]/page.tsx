import { getCurrency, getDiscount, getSingleProduct } from '@/services';
import ui from '@/ui';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Produto: FC = (): JSX.Element => {
  const product = getSingleProduct('1');

  if (!product) return <h2>Erro ao carregar o produto</h2>;

  const { title, image, price, store, link } = product;
  return (
    <div className='product__container px-4 flex flex-col gap-4'>
      <h1 className='product__title text-2xl font-bold'>{title}</h1>
      <div className='grid lg:grid-cols-2'>
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
        <div className='flex flex-col justify-between'>
          <div className={ui.card.store}>
            <p>vendido por: {store}</p>
          </div>
          <div className={ui.card.price.container}>
            {price?.discount && (
              <div>
                <span className={ui.card.price.regular}>
                  {getCurrency(price.regular)}
                </span>
                <span className='text-xs text-white bg-orange-400 p-1 rounded ml-2'>
                  {getDiscount(price.regular, price?.discount || 0)}% off
                </span>
              </div>
            )}
            <span className={ui.card.price.discount}>
              {getCurrency(price.discount || price.regular)}
            </span>
          </div>
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
    </div>
  );
};
export default Produto;
