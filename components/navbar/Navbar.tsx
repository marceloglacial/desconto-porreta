import ui from '@/ui';
import { FC } from 'react';

export interface NavbarProps {
  branding: {
    title: string;
  };
}

export const NavBar: FC<NavbarProps> = ({ branding }): JSX.Element => {
  return (
    <nav className={ui.navbar.container}>
      <div className={ui.navbar.content}>
        <h1 className={ui.navbar.branding}>{branding.title}</h1>
      </div>
    </nav>
  );
};
