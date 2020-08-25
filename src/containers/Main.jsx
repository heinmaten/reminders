import React from 'react';

import {
  AddReminderButton,
  MainTitle,
  MainInfo,
  Reminders,
} from 'src/components';

const Main = () => {
  return (
    <main className="app-main">
      <header className="app-main__main-header main-header">
        <AddReminderButton />

        <div className="main-header__wrapper">
          <MainTitle />

          <p className="main-header__counter">
            3
            <span className="visually-hidden">
              active reminders
            </span>
          </p>
        </div>
      </header>

      <div className="app-main__main-container">
        <MainInfo />

        <Reminders />
      </div>
    </main>
  );
};

export default Main;
