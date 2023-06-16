import { useSelector } from 'react-redux';
import {
  selectCountries,
  selectError,
  selectIsDetailsShown,
  selectIsLoading,
} from '../redux/selectors';

export const useCountries = () => {
  const countries = useSelector(selectCountries);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isDetailsShown = useSelector(selectIsDetailsShown);

  return {
    countries,
    error,
    isLoading,
    isDetailsShown,
  };
};
