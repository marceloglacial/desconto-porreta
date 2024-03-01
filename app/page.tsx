import CardStore from '@/components/card/CardStore';
import { Card, SearchBar } from '@/components';
import { getProducts } from '@/services';

export default function Home() {
  const data = getProducts();
  const products = [
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
  ];

  return (
    <div className='bg-white'>
      <main className='flex min-h-screen flex-col gap-4  pt-20 max-w-screen-xl mx-auto'>
        <div className='stores w-full overflow-x-auto flex flex-nowrap gap-4 px-4 pl-4'>
          <CardStore />
          <CardStore store='ml' />
          <CardStore store='magalu' />
          <CardStore store='americanas' />
          <CardStore store='submarino' />
        </div>
        <div className='content px-4 flex flex-col gap-4'>
          <SearchBar />
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-4'>
            {products.map((product, index) => {
              return <Card key={index} {...product} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
