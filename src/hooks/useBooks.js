import { useSelector } from 'react-redux';
import {
  selectBookDetails,
  selectBooks,
  selectError,
  selectIsDetailsShown,
  selectIsLoading,
  selectStartIndex,
  selectTotalNumber,
} from '../redux/selectors';

export const useBooks = () => {
  const books = useSelector(selectBooks);
  const bookDetails = useSelector(selectBookDetails);
  const totalNumber = useSelector(selectTotalNumber);
  const startIndex = useSelector(selectStartIndex);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isDetailsShown = useSelector(selectIsDetailsShown);

  return {
    books,
    bookDetails,
    totalNumber,
    startIndex,
    error,
    isLoading,
    isDetailsShown,
  };
};
