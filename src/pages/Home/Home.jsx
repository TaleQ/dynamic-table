import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  const btnText = 'Start now';

  return (
    <>
      <div className='home-thumb'>
        <h1 className='home-title'>Countries Search</h1>
        <Link className='home-link' to='/countries'>
          {btnText.toUpperCase()}
        </Link>
      </div>
    </>
  );
};

export default Home;
