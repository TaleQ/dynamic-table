import { Link } from 'react-router-dom';
import { useBooks } from '../../hooks/useBooks';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const BreadcrumbsNavigation = () => {
  const { isDetailsShown } = useBooks();
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link underline='hover' color='inherit' to='/'>
        Home
      </Link>
      <Link underline='hover' color='inherit' to='/books'>
        Books
      </Link>
      {isDetailsShown ? (
        <Typography color='text.primary'>Book Details</Typography>
      ) : null}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNavigation;
