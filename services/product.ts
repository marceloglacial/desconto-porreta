import { productMessages } from '@/constants';

interface IgetProducts {
  data: IProduct[],
  meta: Object
}

const formatProduct = (product: ApiProduct): IProduct => {
  const { id, attributes } = product;
  const { title, link, priceRegular, priceDiscount, vendor, image } = attributes;

  return {
    id: id.toString(),
    title,
    link,
    description: title,
    image: {
      src: image.data.attributes.url,
      alt: image.data.attributes.alternativeText || title,
      width: image.data.attributes.width,
      height: image.data.attributes.height,
    },
    vendor: {
      id: vendor.data.id.toString(),
      name: vendor.data.attributes.name,
      slug: vendor.data.attributes.slug
    },
    price: {
      regular: priceRegular,
      discount: priceDiscount || undefined,
    },
  };
}

export const getProducts = async (): Promise<IgetProducts> => {
  const res = await fetch('http://localhost:1337/api/products?populate=*')
  if (!res.ok) {
    throw new Error(productMessages.error.message)
  }
  const apiData = await res.json()
  const result = {
    data: apiData.data.map((item: ApiProduct) => formatProduct(item)),
    meta: apiData.meta
  }
  return result
};

export const getSingleProduct = async (id: string): Promise<IProduct | undefined> => {
  const apiData = await getProducts()
  return (
    apiData.data.find((product) => product.id === id) ||
    undefined
  );
};

export const getProductsByVendor = async (id: string) => {
  const apiData = await getProducts()
  return apiData.data.filter((product) => product.vendor.id === id);
};

export function getDiscount(regularPrice: number, finalPrice: number): number {
  const discountPercentage = ((regularPrice - finalPrice) / regularPrice) * 100;
  return Math.round(discountPercentage);
}

export const getCurrency = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
