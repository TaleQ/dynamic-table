import './SearchForm.scss';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { TfiSearch } from 'react-icons/tfi';

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = inputValue.trim();
    if (!searchQuery) {
      Notify.info('Please enter a search query', { position: 'center-top' });
      return;
    }
    setSearchParams({ query: searchQuery });
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        className='form-input'
        type='text'
        autoComplete='off'
        autoFocus
        placeholder='Search countries by name or its part'
        value={inputValue}
        onChange={handleChange}
      />
      <button className='form-btn' type='submit'>
        <TfiSearch className='form-btn__icon' fill='#14578e' />
      </button>
    </form>
  );
};
