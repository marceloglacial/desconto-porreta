import data from '@/data/data.json';
export const getProducts = () => {
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

export const getSingleProduct = (id: string) => {
  return data.products.find((product) => product.id === id);
};

export const getDiscount = (regular: number, final: number): number =>
  (final / regular) * 100;

export const getCurrency = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
