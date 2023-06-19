import './SharedLayout.scss';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation/BreadcrumbsNavigation';
import { useCountries } from '../../hooks/useCountries';
import earthGif from '../../assets/images/earth.gif';
import { useEffect } from 'react';
import { Notify } from 'notiflix';

export const SharedLayout = () => {
  const { isLoading, error } = useCountries();
  const { pathname } = useLocation();

  useEffect(() => {
    if (error) {
      Notify.failure(`${error}`, { position: 'center-top' });
    }
  }, [error]);

  const isCountriesPage = pathname === '/countries';

  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <NavLink
            to={isCountriesPage ? '/' : '/countries'}
            className='nav-link'
          >
            Dynamic Countries Table
          </NavLink>
          <BreadcrumbsNavigation />
        </div>
        <img className='header-img' src={earthGif} alt='Earth' />
      </header>
      <main>
        <div className='container'>
          {isLoading && <Loader />}
          <Outlet />
        </div>
      </main>
    </>
  );
};
