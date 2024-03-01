import ui from '@/ui';
import { FC } from 'react';

export const SearchBar: FC = (): JSX.Element => {
  return (
    <div className={ui.searchbar.container}>
      <input
        type='search'
        className={ui.searchbar.input}
        placeholder='buscar produto'
      />
    </div>
  );
};
