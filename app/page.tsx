import { Avatar, Card, SearchBar } from '@/components';
import { productMessages } from '@/constants';
import { getProducts, getSiteInfo, getVendors } from '@/services';
import ui from '@/ui';
import { Metadata } from 'next';
// import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const siteInfo = getSiteInfo()
  return {
    title: siteInfo.title,
    description: siteInfo.description,
    openGraph: {
      title: siteInfo.title,
      description: siteInfo.description,
      url: siteInfo.url,
      siteName: siteInfo.title,
      images: [
        {
          url: siteInfo.openGraph,
          width: 800,
          height: 600,
          alt: `Logo do site Desconto Porreta`,
        },
      ],
      locale: 'pt_BR',
      type: 'website',
    },
  };
}


export default async function Home() {
  const products = await getProducts();
  const allProducts: IProduct[] = products.data

  // const vendors = await getVendors();
  // const allVendors: IVendor[] = vendors.data

  return (
    <div className={ui.layout.homePage.container}>
      {/* <div className={ui.layout.homePage.stores}>
        {allVendors.map((vendor) => {
          const { _id, image, slug, title } = vendor;
          return (
            <Link href={`/loja/${slug}`} key={_id}>
              <Avatar image={{ src: image.src, alt: title }} />
            </Link>
          );
        })}
      </div> */}
      {/* <div>
        <SearchBar />
      </div> */}
      <div className={ui.layout.homePage.content}>
        <div className={ui.layout.homePage.products}>
          {!allProducts.length && <div>{productMessages.emptyList}</div>}
          {allProducts?.map((product) => {
            return <Card key={product._id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
