import React, { useState, useRef, useEffect } from 'react';

const MainHeader = () => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('Lorem ipsum');

  const titleRef = useRef();

  const onInputChangeHandler = ({ currentTarget }) => {
    const { value } = currentTarget;

    setTitle(value);
  };

  useEffect(() => {
    const onKeyDownHandler = ({ key }) => {
      if (key === 'Escape') setEditMode(false);
      if (key === 'Enter') setEditMode(false);
    };

    const onOutsideClickHandler = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());

      if (!path.includes(titleRef.current)) {
        setEditMode(false);
      }
    };

    document.addEventListener('keydown', onKeyDownHandler);
    document.addEventListener('click', onOutsideClickHandler);

    return () => {
      document.removeEventListener('keydown', onKeyDownHandler);
      document.removeEventListener('click', onOutsideClickHandler);
    };
  }, []);

  return (
    <div className="main-header__title-wrapper" ref={titleRef}>
      {
        !editMode
          ? (
            <h2 className="main-header__title">
              <button
                className="main-header__title-button"
                type="button"
                onClick={() => setEditMode(true)}
              >
                {title}
              </button>
            </h2>
          ) : (
            <input
              className="main-header__title-input"
              type="text"
              name="title"
              id=""
              autoComplete="off"
              spellCheck="false"
              autoFocus
              value={title}
              onChange={onInputChangeHandler}
            />
          )
      }
    </div>
  );
};

export default MainHeader;
