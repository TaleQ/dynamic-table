import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCountries, getCountryByName } from '../../redux/operations';
import { CountriesTable } from '../../components/CountriesTable/CountriesTable';
import { SearchForm } from '../../components/SearchForm/SearchForm';

const Countries = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery) {
      dispatch(getCountryByName(searchQuery));
    } else {
      dispatch(getAllCountries());
    }
  }, [dispatch, searchQuery]);

  return (
    <>
      <SearchForm />
      <CountriesTable />
    </>
  );
};

export default Countries;
