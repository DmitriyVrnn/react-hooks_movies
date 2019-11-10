import React, { useState } from 'react';

import { Form } from './styles';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = e => setSearchValue(e.target.value);

  const resetInputField = () => setSearchValue('');

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
  }

  return (
    <Form>

    </Form>
  )
};

export default Search;