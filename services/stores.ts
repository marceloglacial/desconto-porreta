import data from '@/data/data.json';
export const getStores = () => {
  return data.stores;
};

export const getStoreBySlug = (slug: string) => {
  return data.stores.find((store) => store.slug === slug);
};

export const getStoreById = (id: string) => {
  return data.stores.find((store) => store.id === id);
};
