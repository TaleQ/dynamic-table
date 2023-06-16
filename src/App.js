import './App.css';
import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { getBooksByQuery } from './redux/operations';
import { Loader } from './components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home/Home'));
const Books = lazy(() => import('./pages/Books/Books'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksByQuery());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='books' element={<Books />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
