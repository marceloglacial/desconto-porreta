const CardStore = (props: { store?: string }) => {
  const { store = 'amazon' } = props;

  const storeLogo = {
    amazon: `https://www.pngall.com/wp-content/uploads/2016/03/Amazon-Logo-Transparent-PNG.png`,
    ml: `https://teamlinx.com/wp-content/uploads/2023/08/Accountability.png`,
    magalu: `https://logodownload.org/wp-content/uploads/2014/06/magalu-logo-0.png`,
    americanas: `https://logodownload.org/wp-content/uploads/2019/10/americanas-logo-0-599x599.png`,
    submarino: `https://logodownload.org/wp-content/uploads/2014/06/submarino-logo-0-1536x1536.png`,
  };

  return (
    <div className='store w-24 min-w-24 max-w-24 h-24 flex items-center justify-center rounded-full bg-slate-200 p-4'>
      <img src={storeLogo[store]} />
    </div>
  );
};

export default CardStore;
