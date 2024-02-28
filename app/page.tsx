import Card from '@/components/card/Card';
import CardStore from '@/components/card/CardStore';
import NavBar from '@/components/navbar/Navbar';
import SearchBar from '@/components/searchbar/SearchBar';

export default function Home() {
  return (
    <div className='bg-white'>
      <header>
        <NavBar />
      </header>
      <main className='flex min-h-screen flex-col gap-8 p-8'>
        <SearchBar />
        <div className='stores w-full overflow-x-auto flex flex-nowrap gap-4 pb-4'>
          <CardStore />
          <CardStore store='ml' />
          <CardStore store='magalu' />
          <CardStore store='americanas' />
          <CardStore store='submarino' />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}
