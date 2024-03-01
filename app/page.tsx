import { Avatar, Card, SearchBar } from '@/components';
import { getProducts, getStores } from '@/services';

export default function Home() {
  const products = getProducts();
  const stores = getStores();

  return (
    <div className='page__content'>
      <div className='stores w-full overflow-x-auto flex flex-nowrap gap-4 px-4 pl-4'>
        {stores.map((store) => {
          const { id, logo, title } = store;
          return <Avatar key={id} image={{ src: logo, alt: title }} />;
        })}
      </div>
      <div className='content px-4 flex flex-col gap-4'>
        <SearchBar />
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4'>
          {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
