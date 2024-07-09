'use client'

import { ErrorBoundary } from '@/components'
import { productMessages } from '@/constants'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <ErrorBoundary
            title={productMessages.error.message}
            action={productMessages.error.actionMessage}
            reset={reset}
        />
    )
}