import React from 'react';
import s from './SearchForm.module.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

export class SearchForm extends React.Component {
  state = {
    searchText: '',
  };
  handleChange = event => {
    this.setState({ searchText: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchText.trim() === '') {
      toast.info('Please enter your request');
      return;
    }
    this.props.onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
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
          value={this.state.searchText}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
