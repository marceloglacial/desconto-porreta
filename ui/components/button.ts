const transition = `transition ease-in-out duration-300`
const buttonContainer = `button px-[6px] py-2 md:px-4 md:py-2 rounded-lg font-bold transition-all ${transition} block w-full text-center text-xs md:text-sm`

export const button = {
    primary: `${buttonContainer} bg-rose-600 text-white border hover:bg-white hover:text-rose-600 hover:border border-rose-600`,
    secondary: `${buttonContainer} bg-white text-rose-600 border border-rose-600`,
}

export default button
