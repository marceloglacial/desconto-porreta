import { Avatar, Card, SearchBar } from '@/components';
import { productMessages } from '@/constants';
import { getProducts, getVendors } from '@/services';
import ui from '@/ui';
import Link from 'next/link';

export default async function Home() {
  const products = await getProducts();
  const allProducts = products.data

  const vendors = await getVendors();
  const allVendors = vendors.data

  return (
    <div className={ui.layout.homePage.container}>
      <div className={ui.layout.homePage.stores}>
        {allVendors.map((vendor) => {
          const { id, logo, slug, name } = vendor;
          return (
            <Link href={`/loja/${slug}`} key={parseInt(id)}>
              <Avatar image={{ src: logo, alt: name }} />
            </Link>
          );
        })}
      </div>
      <div className={ui.layout.homePage.content}>
        <SearchBar />
        <div className={ui.layout.homePage.products}>
          {!allProducts.length && <div>{productMessages.emptyList}</div>}
          {allProducts?.map((product) => {
            return <Card key={product.id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
