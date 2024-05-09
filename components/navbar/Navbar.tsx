import ui from '@/ui';
import Link from 'next/link';
import { FC } from 'react';
import { Icon, Logo } from '@/components';
import { SocialItemType, getSocial } from '@/services/social';

export interface NavbarProps {
  branding: {
    title: string;
  };
}

export const NavBar: FC<NavbarProps> = async ({ branding }): Promise<JSX.Element> => {
  const socialItems = await getSocial()

  return (
    <nav className={ui.navbar.container}>
      <div className={ui.navbar.content}>
        <div>
          <Link href={'/'}>
            <h1 className={ui.navbar.branding}>{branding.title}</h1>
            <Logo />
          </Link>
        </div>
        <div className='social flex gap-4 items-center ml-auto'>
          {socialItems.data.map((item: SocialItemType, index: number) => {
            return <Link href={item.link} target='_blank' key={index}><Icon icon={item.icon} size={item.size} /></Link>
          })}
        </div>
      </div>
    </nav>
  );
};
