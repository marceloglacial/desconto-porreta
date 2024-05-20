const layout = {
    container: `layout__container bg-brand-background min-h-screen`,
    main: `layout__main flex flex-col gap-4 max-w-screen-xl mx-auto max-[400px]:p-4 p-6 max-[400px]:pt-[64px] pt-16 sm:pt-0`,
    footer: `layout__footer flex flex-col gap-6 max-w-screen-xl mx-auto pt-8 text-sm p-6`,
    homePage: {
        container: 'home__container grid gap-4',
        stores: 'home__stores w-full overflow-x-auto flex flex-nowrap gap-4 px-4 pl-4 pb-2',
        content: 'home__content flex flex-col gap-4',
        products: 'home__products grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4',
    },
    productpage: {
        container: 'product__container flex flex-col gap-4',
        title: 'product__title text-2xl md:text-4xl font-bold',
        info: 'product__info grid gap-8 lg:flex',
        figure: 'product__figure card__figure relative overflow-hidden bg-white border-2 rounded-lg shadow-xl w-full sm:w-96 h-96 lg:shrink-0 mx-auto lg:mx-0',
        image: 'product__image object-contain w-full h-full overflow-hidden p-4',
        description:
            'product__description flex flex-col justify-center gap-4 flex-grow grid-span-2',
        vendor: 'product__vendor text-lg text-slate-600',
        priceContainer: 'product__price flex flex-col pt-2 gap-4 font-bold',
        discount: 'product__price--discount text-red-600 line-through',
        discountBadge: 'product__price--badge text-white bg-orange-400 p-1 rounded ml-2',
        price: 'product__price--regular text-5xl font-bold',
        button: 'product__price--button lg:max-w-xs',
    },
    storePage: {
        container: 'store__container flex flex-col gap-8 mx-4',
        branding: 'store__branding flex gap-4 text-4xl items-center font-bold ',
        title: 'store__title text-slate-600',
        products: 'store__products grid grid-cols-2 lg:grid-cols-5 gap-4',
    },
}

export default layout
