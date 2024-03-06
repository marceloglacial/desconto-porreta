import { productMessages } from '@/constants';
import { getCurrency, getDiscount, getSingleProduct, getStoreById } from '@/services';
import ui from '@/ui';
import Image from 'next/image';
import Link from 'next/link';

const Produto = ({ params }: { params: { id: string } }): JSX.Element => {
  const product = getSingleProduct(params.id);

  if (!product) return <h2>{productMessages.error.message}</h2>;
  
  const { title, image, price, store, link } = product;
  const vendor = getStoreById(store)

  return (
    <div className={ui.layout.productpage.container}>
      <h1 className={ui.layout.productpage.title}>{title}</h1>
      <div className={ui.layout.productpage.info}>
        <figure className={ui.layout.productpage.figure}>
          <Image
            className={ui.layout.productpage.image}
            src={image.src}
            fill
            alt={image?.alt || ''}
            sizes='(max-width: 300px) 100vw, (max-width: 150px) 50vw, 33vw"'
            priority
          />
        </figure>
        <div className={ui.layout.productpage.description}>
          <div className={ui.layout.productpage.vendor}>
            <p><Link href={`/loja/${vendor?.slug}`}>vendido por: {vendor?.title}</Link></p>
          </div>
          <div className={ui.layout.productpage.priceContainer}>
            {price?.discount && (
              <div>
                <span className={ui.layout.productpage.discount}>
                  {getCurrency(price.regular)}
                </span>
                <span className={ui.layout.productpage.discountBadge}>
                  {getDiscount(price.regular, price?.discount || 0)}% off
                </span>
              </div>
            )}
            <span className={ui.layout.productpage.price}>
              {getCurrency(price.discount || price.regular)}
            </span>
          </div>
          <div className={ui.layout.productpage.button}>
            <Link
              href={`/redirect?url=${link}`}
              target='_blank'
              className={ui.button.primary}
            >
              {productMessages.ctaButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Produto;
