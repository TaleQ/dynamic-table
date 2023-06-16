import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={css.homeThumb}>
        <h2 className={css.title}>Countries Search</h2>
        <button className={css.navBtn}>
          <NavLink to='/countries'>See all countries</NavLink>
        </button>
      </div>
    </>
  );
};

export default Home;
