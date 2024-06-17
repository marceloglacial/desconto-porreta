import { FC } from 'react'
import Link from 'next/link'

export interface PaginationBarProps {
    page: number
    totalPages: number
}
export const PaginationBar: FC<PaginationBarProps> = ({ page, totalPages }): JSX.Element => {
    const paginationPages = Array.from({ length: totalPages }, (_value, index) => index + 1)
    return (
        <div className='pagination flex gap-2 w-full justify-center'>
            {paginationPages.map((singlePage) => {
                const isActivePage = singlePage === page
                return (
                    <div key={singlePage}>
                        {isActivePage ? (
                            <span className='py-2 px-4 border bg-pink-600 text-white border-pink-600 rounded-lg hover:cursor-not-allowed'>
                                {singlePage}
                            </span>
                        ) : (
                            <Link
                                className='py-2 px-4 border-2 bg-white text-pink-600 border-pink-600 rounded-lg hover:text-white hover:bg-pink-600'
                                href={`/pagina/${singlePage}`}
                            >
                                {singlePage}
                            </Link>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
