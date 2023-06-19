import { Link, useSearchParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useCountries } from '../../hooks/useCountries';
import { useDispatch } from 'react-redux';
import { toggleIsDetailsShown } from '../../redux/countriesSlice';

const BreadcrumbsNavigation = () => {
  const { isDetailsShown } = useCountries();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const dispatch = useDispatch();

  return (
    <Breadcrumbs aria-label='breadcrumbs' className='breadcrumbs'>
      <Link
        underline='hover'
        color='inherit'
        to='/'
        onClick={() => dispatch(toggleIsDetailsShown(false))}
      >
        Home
      </Link>
      <Link
        underline='hover'
        color='inherit'
        to='/countries'
        onClick={() => dispatch(toggleIsDetailsShown(false))}
      >
        All countries
      </Link>
      {searchQuery ? (
        <Link
          underline='hover'
          color='inherit'
          to={`/countries?query=${searchQuery}`}
          onClick={() => dispatch(toggleIsDetailsShown(false))}
        >
          Search Results
        </Link>
      ) : null}
      {isDetailsShown ? (
        <Typography color='text.primary'>Country Details</Typography>
      ) : null}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNavigation;
