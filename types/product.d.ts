interface IProduct {
  id: string;
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  store: string;
  link: string;
  price: {
    regular: number;
    discount?: number;
  };
}
