import { productMessages } from '@/constants';
import data from '@/data/data.json';
export const getProducts = (): IProduct[] => {
  return [
    ...data.products,
    ...data.products,
    ...data.products,
    ...data.products,
    ...data.products,
    ...data.products,
    ...data.products,
    ...data.products,
    ...data.products,
    ...data.products,
  ];
};

export const getSingleProduct = (id: string): IProduct | undefined => {
  return (
    data.products.find((product): IProduct | Object => product.id === id) ||
    undefined
  );
};

export const getProductsByStore = (id: string) => {
  return data.products.filter((product) => product.store === id);
};

export function getDiscount(regularPrice: number, finalPrice: number): number {
  const discountPercentage = ((regularPrice - finalPrice) / regularPrice) * 100;
  return Math.round(discountPercentage);
}

export const getCurrency = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
