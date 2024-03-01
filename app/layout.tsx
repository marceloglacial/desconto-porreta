import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NavBar, NavbarProps } from '@/components';
import { getSiteInfo } from '@/services';

const inter = Inter({ subsets: ['latin'] });
const siteInfo = getSiteInfo();

export const metadata: Metadata = {
  title: `${siteInfo.title} - ${siteInfo.description}`,
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarProps: NavbarProps = {
    branding: {
      title: siteInfo.title,
    },
  };

  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <NavBar {...navbarProps} />
        </header>
        {children}
      </body>
    </html>
  );
}
