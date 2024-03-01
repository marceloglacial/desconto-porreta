const card = {
  container: 'card rounded-xl overflow-hidden border shadow-2xl',
  figure: 'card__figure relative aspect-4/3 h-56 md:h-64',
  image: 'card__image  overflow-hidden  object-cover',
  body: 'card__body p-4 flex flex-col gap-2',
  title: 'card__title font-bold',
  description: 'card__description',
  store: 'card__store',
  price: {
    container: 'card__price flex flex-col pt-2 font-bold',
    regular: 'card__price--regular text-xs text-red-600  line-through',
    discount: 'card__price--discount text-2xl',
  },
  actions: {
    container: 'card__actions',
  },
};

export default card;
