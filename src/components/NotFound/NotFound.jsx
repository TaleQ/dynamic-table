import './NotFound.scss';
import NotFoundImg from '../../assets/images/notfound_page.png';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='notFoundBox'>
      <img className='notFoundImg' src={NotFoundImg} alt='Page not found' />
      <Link to='/' className='notFoundLink'>
        Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
