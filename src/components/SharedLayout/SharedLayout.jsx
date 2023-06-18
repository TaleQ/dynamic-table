import './SharedLayout.scss';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import BreadcrumbsNavigation from '../BreadcrumbsNavigation/BreadcrumbsNavigation';
import { useCountries } from '../../hooks/useCountries';
import earthGif from '../../assets/images/earth.gif';

export const SharedLayout = () => {
  const { isLoading } = useCountries();
  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <h1 className='main-title'>Dynamic Countries Table</h1>
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
