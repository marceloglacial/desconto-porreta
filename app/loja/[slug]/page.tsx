import { Avatar, Card } from '@/components';
import { productMessages, vendorMessages } from '@/constants';
import { getProductsByVendor, getVendorBySlug } from '@/services';
import ui from '@/ui';

const Loja = async ({ params }: { params: { slug: string } }) => {
  const vendor = await getVendorBySlug(params.slug);

  if (!vendor) return <div>{vendorMessages.error.message}</div>;

  const products = await getProductsByVendor(vendor.id);
  const { logo, name } = vendor;

  return (
    <section className={ui.layout.storePage.container}>
      <div className={ui.layout.storePage.branding}>
        <Avatar image={{ src: logo, alt: name }} />{' '}
        <h1 className=''>{name}</h1>
      </div>
      <div className={ui.layout.storePage.products}>
        {!products.length && <div>{productMessages.emptyList}</div>}
        {products.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};
export default Loja;
