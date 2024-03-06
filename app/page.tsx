import { Avatar, Card, SearchBar } from '@/components';
import { getProducts, getStores } from '@/services';

export default function Home() {
  const products = getProducts();
  const stores = getStores();

  return (
    <div className='home__container'>
      <div className='home__stores w-full overflow-x-auto flex flex-nowrap gap-4 px-4 pl-4'>
        {stores.map((store) => {
          const { id, logo, title } = store;
          return <Avatar key={id} image={{ src: logo, alt: title }} />;
        })}
      </div>
      <div className='home__content px-4 flex flex-col gap-4'>
        <SearchBar />
        <div className='home__products grid grid-cols-2 lg:grid-cols-5 gap-4'>
          {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}
