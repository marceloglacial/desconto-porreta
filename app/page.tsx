import { Avatar, Card, SearchBar } from '@/components';
import { getProducts, getStores } from '@/services';
import ui from '@/ui';
import Link from 'next/link';

export default function Home() {
  const products = getProducts();
  const stores = getStores();

  return (
    <div className={ui.layout.homePage.container}>
      <div className={ui.layout.homePage.stores}>
        {stores.map((store) => {
          const { id, logo, title, slug } = store;
          return (
            <Link href={`/loja/${slug}`} key={id}>
              <Avatar image={{ src: logo, alt: title }} />
            </Link>
          );
        })}
      </div>
      <div className={ui.layout.homePage.content}>
        <SearchBar />
        <div className={ui.layout.homePage.products}>
          {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
