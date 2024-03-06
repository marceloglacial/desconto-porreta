'use client';

import { global } from '@/constants';
import { useEffect } from 'react';

const Redirect: React.FC = () => {
  useEffect(() => {
    const redirectWithDelay = () => {
      const url = new URL(window.location.href);
      const redirectUrl = url.searchParams.get('url');
      if (redirectUrl) {
        setTimeout(() => {
          window.location.href = redirectUrl!;
        }, global.redirect.time);
      } else {
        console.error('No URL provided in query parameters');
      }
    };

    redirectWithDelay();
  }, []);

  return (
    <div
      aria-label='Loading...'
      role='status'
      className=' w-wull h-screen flex items-center flex-col gap-2'
    >
      <strong>Carregando orferta!</strong>
      <svg
        width='24'
        height='24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        strokeLinecap='round'
        strokeLinejoin='round'
        xmlns='http://www.w3.org/2000/svg'
        className='animate-spin w-16 h-16 stroke-slate-500'
      >
        <path d='M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12'></path>
      </svg>
    </div>
  );
};

export default Redirect;
