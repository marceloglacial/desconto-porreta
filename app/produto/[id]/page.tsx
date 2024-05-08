import { productMessages } from '@/constants';
import { getCurrency, getDiscount, getSingleProduct, getSiteInfo } from '@/services';
import ui from '@/ui';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const siteInfo = getSiteInfo()
  const data = await getSingleProduct(params.id);
  const product: IProduct = data.data
  const description: string = `${product.title}: De ${getCurrency(product.price.regular)} por ${getCurrency(product.price.discount)}`
  return {
    title: `${product.title} - ${siteInfo.title}`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: description,
      url: `${siteInfo.url}/produto/${params.id}`,
      siteName: siteInfo.title,
      images: [
        {
          url: product.image.src,
          width: 800,
          height: 600,
        },
        {
          url: product.image.src, // Dynamic og route
          width: 1800,
          height: 1600,
          alt: `Foto ilustrativa do produto`,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
  };
}

const Produto = async ({ params }: { params: { id: string } }) => {
  const data = await getSingleProduct(params.id);
  const product: IProduct = data.data

  if (data.status === 'error') return <h2>{productMessages.error.message}</h2>;

  const { title, image, price, link, description, vendor_info } = product;
  const vendor = vendor_info[0]

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
          <div>
            {description}
          </div>
          <div className={ui.layout.productpage.vendor}>
            <p><Link href={`/loja/${vendor.slug}`}>vendido por: {vendor.title}</Link></p>
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
