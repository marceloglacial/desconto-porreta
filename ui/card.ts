const card = {
  container: 'card rounded-xl overflow-hidden border-4 shadow-lg',
  image: 'card__image',
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
