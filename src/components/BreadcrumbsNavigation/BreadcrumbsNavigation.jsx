import './BreadcrumbsNavigation.scss';
import { Link, useSearchParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useCountries } from '../../hooks/useCountries';
import { useDispatch } from 'react-redux';
import { toggleIsDetailsShown } from '../../redux/countriesSlice';

const BreadcrumbsNavigation = () => {
  const { isDetailsShown } = useCountries();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const dispatch = useDispatch();

  return (
    <Breadcrumbs
      aria-label='breadcrumbs'
      sx={{ color: '#212121' }}
      separator={<NavigateNextIcon fontSize='small' />}
    >
      <Link
        className='breadcrumbs-link'
        underline='hover'
        color='inherit'
        to='/'
        onClick={() => dispatch(toggleIsDetailsShown(false))}
      >
        <HomeIcon sx={{ mr: 0.5, mb: 0.3 }} fontSize='inherit' />
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
          {`Search Results: ${searchQuery}`}
        </Link>
      ) : null}
      {isDetailsShown ? (
        <Typography color='text.primary'>Country Details</Typography>
      ) : null}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNavigation;
