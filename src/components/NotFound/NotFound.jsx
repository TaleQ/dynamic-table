import css from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={css.notFoundBox}>
      <p className={css.notFoundText}>This page wasn't found</p>
    </div>
  );
};

export default NotFound;
