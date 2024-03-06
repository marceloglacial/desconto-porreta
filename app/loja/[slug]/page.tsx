import { Avatar, Card } from '@/components';
import { productMessages } from '@/constants';
import {  getProductsByStore, getStoreBySlug } from '@/services';
import ui from '@/ui';

const Loja = ({ params }: { params: { slug: string } }): JSX.Element => {
  const store = getStoreBySlug(params.slug);

  if (!store) return <div>Error</div>;
  const products = getProductsByStore(store.id);
  const { logo, title } = store;

  return (
    <section className={ui.layout.storePage.container}>
      <div className={ui.layout.storePage.branding}>
        <Avatar image={{ src: logo, alt: title }} />{' '}
        <h1 className=''>{title}</h1>
      </div>
      <div className={ui.layout.storePage.products}>
        {!products.length && <div>{productMessages.emptyList}</div>}
        {products.map((product, index) => {
          return <Card key={index} {...product} />;
        })}
      </div>
    </section>
  );
};
export default Loja;
