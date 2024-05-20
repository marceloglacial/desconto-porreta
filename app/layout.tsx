import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, NavBar, NavbarProps, GoogleAnalytics } from '@/components'
import { getSiteInfo } from '@/services'

const inter = Inter({ subsets: ['latin'] })
const siteInfo = getSiteInfo()

export async function generateMetadata(): Promise<Metadata> {
    const siteInfo = getSiteInfo()
    return {
        title: `${siteInfo.title} - ${siteInfo.description}`,
        description: siteInfo.description,
        openGraph: {
            title: siteInfo.title,
            description: siteInfo.description,
            url: siteInfo.url,
            siteName: siteInfo.title,
            images: [
                {
                    url: siteInfo.openGraph,
                    width: 800,
                    height: 600,
                    alt: `Logo do site Desconto Porreta`,
                },
            ],
            locale: 'pt_BR',
            type: 'website',
        },
    }
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
                <div className='layout__container bg-brand-background min-h-screen'>
                    <header>
                        <NavBar {...navbarProps} />
                    </header>
                    <main className='layout__main flex flex-col gap-4 max-w-screen-xl mx-auto max-[400px]:p-4 p-6 max-[400px]:pt-[64px] pt-16 sm:pt-0'>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
