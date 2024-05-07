const card = {
  container:
    'card rounded-xl overflow-hidden border border-slate-300 shadow-xl bg-white',
  figure: 'card__figure relative w-full aspect-square overflow-hidden bg-white',
  image: 'card__image object-contain overflow-hidden p-4  max-h-24 md:max-h-full',
  body: 'card__body p-4 flex flex-col gap-2',
  title: 'card__title font-bold line-clamp-3 md:line-clamp-2',
  description: 'card__description line-clamp-3',
  store: 'card__store text-xs text-slate-600 hidden md:block',
  price: {
    container: 'card__price flex flex-col pt-2 font-bold',
    highlight: 'card_highlight flex flex-wrap gap-2 items-center',
    regular: 'card__price--regular text-xs text-lime-600 line-through ',
    percentageOff: 'card__price--off text-[10px] md:text-xs text-white bg-green-600 p-1 rounded',
    discount: 'card__price--discount text-xl',
  },
  actions: {
    container: 'card__actions',
  },
};

export default card;
