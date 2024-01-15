import React, { useState } from 'react';
import s from './SearchForm.module.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
export const SearchForm = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');
  const handleChange = event => {
    setSearchText(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchText.trim() === '') {
      toast.info('Please enter your request');
      return;
    }
    onSubmit(searchText);
    setSearchText('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <button type="submit" className={s.button}>
        <ImSearch style={{ width: 24, height: 24 }} />
      </button>

      <input
        className={s.input}
        type="text"
        name="searchText"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchText}
        onChange={handleChange}
      />
    </form>
  );
};
