import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchInput,
  StyledSearchbar,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ inputValue: value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    const { inputValue } = this.state;
    e.preventDefault();
    this.props.onSubmit(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <StyledSearchbar>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledSearchButton type="submit">
            <FiSearch />
          </StyledSearchButton>

          <StyledSearchInput
            value={inputValue}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
