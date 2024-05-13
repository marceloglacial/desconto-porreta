import ui from '@/ui'
import Link from 'next/link'
import { FC } from 'react'
import { Logo, SocialBar } from '@/components'

export interface NavbarProps {
    branding: {
        title: string
    }
}

export const NavBar: FC<NavbarProps> = async ({ branding }): Promise<JSX.Element> => {
    return (
        <nav className={ui.navbar.container}>
            <div className={ui.navbar.content}>
                <Link href={'/'}>
                    <h1 className={ui.navbar.branding}>{branding.title}</h1>
                    <Logo />
                </Link>
                <div className='flex items-center ml-auto'>
                    <SocialBar />
                </div>
            </div>
        </nav>
    )
}
