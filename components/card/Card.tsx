import ui from '@/ui';
import Image from 'next/image';

const Card = () => {
  return (
    <div className={ui.card.container}>
      <div className={ui.card.image}>
        <img
          src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='product'
        />
      </div>
      <div className={ui.card.body}>
        <div className={ui.card.title}>
          <h2>Product title</h2>
        </div>
        <div className={ui.card.description}>
          <p>
            Sint magna Lorem fugiat reprehenderit duis. Aute aliquip
            exercitation est officia qui veniam reprehenderit ullamco dolor.
          </p>
        </div>
        <div className='-store'>
          <p>Vendido por: Amazon</p>
        </div>
        <div className='card-price flex flex-col pt-2 font-bold'>
          <span className='card-price-regular text-xs text-red-600  line-through'>
            R$ 199,00
          </span>
          <span className='card-price-discount text-2xl'>R$ 199,00</span>
        </div>
        <div className='card-actions'>
          <button className='px-4 py-2 bg-red-600 rounded-lg text-white font-bold'>
            Ir para a loja!
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
