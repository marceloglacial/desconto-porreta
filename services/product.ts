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

export const getDiscount = (regular: number, final: number): number =>
  (final / regular) * 100;

export const getCurrency = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
