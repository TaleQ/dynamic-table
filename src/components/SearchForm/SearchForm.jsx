import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { TfiSearch } from 'react-icons/tfi';

export const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = inputValue.trim().toLowerCase();
    if (!searchQuery) {
      Notify.info('Please enter a search query', { position: 'center-top' });
      return;
    }
    setSearchParams({ query: searchQuery });
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
