const layout = {
  container: `layout__container bg-white`,
  main: `layout__main flex min-h-screen flex-col gap-4  pt-20 max-w-screen-xl mx-auto`,
  productpage: {
    container: 'product__container px-4 pb-8 flex flex-col gap-4',
    title: 'product__title text-2xl font-bold',
    info: 'product__info flex flex-wrap gap-8',
    figure:
      'product__figure card__figure relative h-96 aspect-square overflow-hidden bg-white border-2 rounded-lg shadow-xl',
    image: 'product__image object-cover overflow-hidden',
    description:
      'pdoruct__description flex flex-col justify-center gap-4 flex-grow',
    vendor: 'product__vendor text-lg text-blue-600',
    priceContainer: 'product__price flex flex-col pt-2 gap-4 font-bold',
    discount: 'product__price--discount text-red-600 line-through',
    discountBadge:
      'product__price--badge text-white bg-orange-400 p-1 rounded ml-2',
    price: 'product__price--regular text-5xl font-bold',
    button: 'product__price--button lg:max-w-xs',
  },
};

export default layout;
