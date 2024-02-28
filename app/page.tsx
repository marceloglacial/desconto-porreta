import Card from '@/components/card/Card';
import NavBar from '@/components/navbar/Navbar';
import SearchBar from '@/components/searchbar/SearchBar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-white'>
      <header>
        <NavBar />
      </header>
      <main className='flex min-h-screen flex-col gap-8 p-8'>
        <SearchBar />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}
