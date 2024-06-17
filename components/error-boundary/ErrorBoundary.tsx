import { FC } from 'react'

interface ErrorBoundaryProps {
    title: string
    action: string
    reset: () => void
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ title, action, reset }): JSX.Element => {
    return (
        <div className=' text-red-600'>
            <h2 className=' text-2xl'>{title}</h2>
            <button onClick={() => reset()}>{action}</button>
        </div>
    )
}
