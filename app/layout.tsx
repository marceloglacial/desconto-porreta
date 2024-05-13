import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, NavBar, NavbarProps, GoogleAnalytics } from '@/components'
import { getSiteInfo } from '@/services'
import ui from '@/ui'

const inter = Inter({ subsets: ['latin'] })
const siteInfo = getSiteInfo()

export const metadata: Metadata = {
    title: `${siteInfo.title} - ${siteInfo.description}`,
    description: siteInfo.description,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const navbarProps: NavbarProps = {
        branding: {
            title: siteInfo.title,
        },
    }

    return (
        <html lang='en'>
            <body className={`${inter.className} bg-brand-background`}>
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
                    <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
                ) : null}
                <div className={ui.layout.container}>
                    <header>
                        <NavBar {...navbarProps} />
                    </header>
                    <main className={ui.layout.main}>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
