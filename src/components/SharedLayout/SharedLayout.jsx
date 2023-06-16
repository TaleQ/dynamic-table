import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Loader } from '../Loader/Loader';
import { useBooks } from '../../hooks/useBooks';
import { SearchForm } from '../SearchForm/SearchForm';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation/BreadcrumbsNavigation';

export const SharedLayout = () => {
  const { isLoading } = useBooks;
  return (
    <>
      <header className={css.header}>
        <p>Dynamic Books Table</p>
        <BreadcrumbsNavigation />
      </header>
      <main>
        <div className={css.container}>
          <SearchForm />
          {isLoading && <Loader />}
          <Outlet />
        </div>
      </main>
    </>
  );
};
