const layout = {
  container: `layout__container bg-brand-background min-h-screen`,
  main: `layout__main flex flex-col gap-4 pt-[150px] max-w-screen-xl mx-auto`,
  footer: `layout__footer flex flex-col gap-4 max-w-screen-xl mx-auto p-4 pt-16 text-sm`,
  homePage: {
    container: 'home__container grid gap-4',
    stores: 'home__stores w-full overflow-x-auto flex flex-nowrap gap-4 px-4 pl-4 pb-2',
    content: 'home__content px-4 flex flex-col gap-4',
    products: 'home__products grid grid-cols-2 lg:grid-cols-5 gap-4'
  },
  productpage: {
    container: 'product__container px-4 pb-8 flex flex-col gap-4',
    title: 'product__title text-2xl md:text-4xl font-bold',
    info: 'product__info grid md:grid-flow-col md:auto-cols-auto gap-8',
    figure:
      'product__figure card__figure relative h-96 aspect-square overflow-hidden bg-white border-2 rounded-lg shadow-xl',
    image: 'product__image object-contain overflow-hidden',
    description:
      'pdoruct__description flex flex-col justify-center gap-4 flex-grow',
    vendor: 'product__vendor text-lg text-slate-600',
    priceContainer: 'product__price flex flex-col pt-2 gap-4 font-bold',
    discount: 'product__price--discount text-red-600 line-through',
    discountBadge:
      'product__price--badge text-white bg-orange-400 p-1 rounded ml-2',
    price: 'product__price--regular text-5xl font-bold',
    button: 'product__price--button lg:max-w-xs',
  },
  storePage: {
    container: 'store__container flex flex-col gap-8 mx-4',
    branding: 'store__branding flex gap-4 text-4xl items-center font-bold ',
    title: 'store__title text-slate-600',
    products: 'store__products grid grid-cols-2 lg:grid-cols-5 gap-4'
  }
};

export default layout;
