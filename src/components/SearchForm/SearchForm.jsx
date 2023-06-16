import { useState } from 'react';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../../redux/operations';
import { TfiSearch } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    dispatch(getCountryByName(inputValue));
    setInputValue('');
    navigate('countries');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        autoComplete='off'
        autoFocus
        placeholder='Search countries by name or its part'
        value={inputValue}
        onChange={handleChange}
      />
      <button type='submit'>
        <TfiSearch fill='#ffffff' />
      </button>
    </form>
  );
};
