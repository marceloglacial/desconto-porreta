import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar, NavbarProps } from '@/components';
import { getSiteInfo } from '@/services';
import ui from '@/ui';

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
        <div className={ui.layout.container}>
          <main className={ui.layout.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
