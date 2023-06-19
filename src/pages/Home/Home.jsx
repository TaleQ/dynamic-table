import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='home-thumb'>
        <h2 className='home-title'>Countries Search</h2>
        <Link to='/countries'>See all countries</Link>
      </div>
    </>
  );
};

export default Home;
