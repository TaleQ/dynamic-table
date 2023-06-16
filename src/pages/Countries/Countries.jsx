import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCountries } from '../../redux/operations';
import { CountriesTable } from '../../components/CountriesTable/CountriesTable';

const Countries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <>
      <CountriesTable />
    </>
  );
};

export default Countries;
