import { useState } from 'react';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { getBooksByQuery } from '../../redux/operations';
import { TfiSearch } from 'react-icons/tfi';

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = inputValue.trim().toLowerCase();
    if (!searchQuery) {
      Notify.info('Please enter search query');
      return;
    }
    dispatch(getBooksByQuery(inputValue));
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        autoComplete='off'
        autoFocus
        placeholder='Search books'
        value={inputValue}
        onChange={handleChange}
      />
      <button type='submit'>
        <TfiSearch fill='#ffffff' />
      </button>
    </form>
  );
};
