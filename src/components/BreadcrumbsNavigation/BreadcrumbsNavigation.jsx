import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useCountries } from '../../hooks/useCountries';

const BreadcrumbsNavigation = () => {
  const { isDetailsShown } = useCountries();
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link underline='hover' color='inherit' to='/'>
        Home
      </Link>
      <Link underline='hover' color='inherit' to='/countries'>
        Countries
      </Link>
      {isDetailsShown ? (
        <Typography color='text.primary'>Country Details</Typography>
      ) : null}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNavigation;
