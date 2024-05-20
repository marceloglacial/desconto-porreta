import Link from 'next/link'
import { FC } from 'react'
import { Logo, SearchBar, SocialBar } from '@/components'

export interface NavbarProps {
    branding: {
        title: string
    }
}

export const NavBar: FC<NavbarProps> = async ({ branding }): Promise<JSX.Element> => {
    return (
        <nav className='navbar__container bg-brand-background relative  w-full z-50'>
            <div className='navbar__content max-w-screen-xl mx-auto flex max-[400px]:p-4 py-2 px-6 sm:py-6 items-center max-[400px]:gap-2 gap-8'>
                <Link href={'/'}>
                    <h1 className='navbar__branding sr-only'>{branding.title}</h1>
                    <Logo />
                </Link>
                <SearchBar />
                <SocialBar />
            </div>
        </nav>
    )
}
