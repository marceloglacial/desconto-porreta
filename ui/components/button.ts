const transition = `transition ease-in-out duration-300`;
const buttonContainer = `button px-4 py-2  rounded-lg font-bold transition-all ${transition} block w-full text-center`;

export const button = {
  primary: `${buttonContainer} bg-red-600 text-white border hover:bg-white hover:text-red-600 hover:border border-red-600`,
  secondary: `${buttonContainer} bg-white text-red-600 border border-red-600`,
};

export default button;
