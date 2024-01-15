import { SearchForm } from 'components/SearchForm/SearchForm';
import s from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={s.Searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
};
