import React from 'react';

const MainInfo = () => (
  <section className="app-main__main-info main-info">
    <p className="main-info__text">
      <span className="main-info__counter">2</span>
      Completed
    </p>
    <button
      className="main-info__toggle-button"
      type="button"
    >
      Show
      <span className="visually-hidden">completed reminders</span>
    </button>
  </section>
);

export default MainInfo;
