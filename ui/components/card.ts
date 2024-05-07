const card = {
  container:
    'card rounded-xl overflow-hidden border border-slate-300 shadow-xl bg-white',
  figure: 'card__figure relative w-full aspect-square overflow-hidden bg-white',
  image: 'card__image object-contain overflow-hidden p-2',
  body: 'card__body p-4 flex flex-col gap-2',
  title: 'card__title font-bold line-clamp-2',
  description: 'card__description line-clamp-3',
  store: 'card__store text-xs text-slate-600',
  price: {
    container: 'card__price flex flex-col pt-2 font-bold',
    regular: 'card__price--regular text-xs text-red-600  line-through',
    discount: 'card__price--discount text-xl',
    percentageOff: 'card__price--off text-xs text-white bg-green-600 p-1 rounded ml-2'
  },
  actions: {
    container: 'card__actions',
  },
};

export default card;
