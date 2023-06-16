import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Loader } from '../Loader/Loader';
import { SearchForm } from '../SearchForm/SearchForm';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation/BreadcrumbsNavigation';
import { useCountries } from '../../hooks/useCountries';

export const SharedLayout = () => {
  const { isLoading } = useCountries();
  return (
    <>
      <header className={css.header}>
        <p>Dynamic Countries Table</p>
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
