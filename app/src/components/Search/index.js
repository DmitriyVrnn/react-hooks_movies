import React, { useState } from 'react';

import { Form, SearchPanel, ButtonSubmit } from './styles';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChange = e => setSearchValue(e.target.value);

  const resetInputField = () => setSearchValue('');

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
  };

  return (
    <Form>
      <SearchPanel value={searchValue}
                   onChange={handleSearchInputChange}
                   type="text" />
      <ButtonSubmit onClick={callSearchFunction}
                    type="submit"
                    value="SEARCH" />
    </Form>
  )
};

export default Search;