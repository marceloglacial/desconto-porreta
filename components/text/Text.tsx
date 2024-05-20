import { FC, ReactNode } from 'react'

export interface TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'p'
    children: ReactNode
}
export const Text: FC<TextProps> = ({ children, variant }): JSX.Element => {
    const textVariants = {
        h1: <h1 className='text-4xl font-bold'>{children}</h1>,
        h2: <h2 className='text-2x font-boldl'>{children}</h2>,
        h3: <h2 className='text-lg font-bold'>{children}</h2>,
        p: <p className=''>{children}</p>,
    }
    return textVariants[variant || 'p']
}
