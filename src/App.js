import './App.scss';
import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { getAllCountries } from './redux/operations';
import { Loader } from './components/Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/Home/Home'));
const Countries = lazy(() => import('./pages/Countries/Countries'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='countries' element={<Countries />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
