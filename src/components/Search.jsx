import React, { useState } from 'react';

import { CrossIcon } from 'src/assets/icons';

const Search = () => {
  const [inputValue, setValue] = useState('');

  const onInputChangeHandler = (evt) => {
    const { value } = evt.currentTarget;

    setValue(value);
  };

  const onClearSearchButtonClickHandler = () => {
    setValue('');
  };

  return (
    <div className="aside-search">
      <input
        className="aside-search__input"
        type="text"
        placeholder="Search"
        value={inputValue}
        autoComplete="off"
        spellCheck="false"
        onChange={onInputChangeHandler}
      />
      {inputValue && (
        <button
          className="aside-search__clear-button"
          type="button"
          onClick={onClearSearchButtonClickHandler}
        >
          <CrossIcon />
          <span className="visually-hidden">Clear search input</span>
        </button>
      )}
    </div>
  );
};

export default Search;
