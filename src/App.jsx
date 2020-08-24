import React from 'react';

import 'src/scss/app.scss';

const filterTypes = [
  { id: 'today', title: 'Today', icon: '' },
  { id: 'scheduled', title: 'Scheduled', icon: '' },
  { id: 'all', title: 'All', icon: '' },
  { id: 'flagged', title: 'Flagged', icon: '' },
];

const items = [
  { id: '1', title: 'Job', icon: '' },
  { id: '2', title: 'Shopping', icon: '' },
  { id: '3', title: 'Family', icon: '' },
  { id: '4', title: 'Job', icon: '' },
  { id: '5', title: 'Shopping', icon: '' },
  { id: '6', title: 'Family', icon: '' },
  { id: '7', title: 'Job', icon: '' },
  { id: '8', title: 'Officia debitis aspernatur suscipit optio eius harum?', icon: '' },
  { id: '9', title: 'Family', icon: '' },
  { id: '10', title: 'Job', icon: '' },
  { id: '11', title: 'Shopping', icon: '' },
  { id: '12', title: 'Shopping', icon: '' },
  { id: '13', title: 'Family', icon: '' },
  { id: '14', title: 'Job', icon: '' },
  { id: '15', title: 'Shopping', icon: '' },
  { id: '16', title: 'Family', icon: '' },
  { id: '17', title: 'Job', icon: '' },
  { id: '18', title: 'Shopping', icon: '' },
  { id: '19', title: 'Family', icon: '' },
  { id: '20', title: 'Job', icon: '' },
  { id: '21', title: 'Shopping', icon: '' },
  { id: '22', title: 'Family', icon: '' },
  { id: '23', title: 'Job', icon: '' },
  { id: '24', title: 'Shopping', icon: '' },
  { id: '25', title: 'Family', icon: '' },
  { id: '26', title: 'Job', icon: '' },
  { id: '27', title: 'Shopping', icon: '' },
  { id: '28', title: 'Family', icon: '' },
  { id: '29', title: 'Job', icon: '' },
  { id: '30', title: 'Shopping', icon: '' },
  { id: '31', title: 'Family', icon: '' },
];

const posts = [
  { id: '35', reminder: 'Officia debitis aspernatur suscipit optio eius harum?', note: '' },
  { id: '36', reminder: 'Reiciendis dicta similique delectus dolorum eius harum?', note: 'Lorem ipsum' },
  { id: '37', reminder: 'Soluta impedit officia natus', note: '' },
  { id: '38', reminder: 'Voluptatum cupiditate', note: '' },
  { id: '39', reminder: 'Quibusdam itaque consequuntur magnam quo officiis autem corporis iusto!', note: '' },
  { id: '40', reminder: 'Unde sit molestiae magni aliquam', note: 'officia' },
  { id: '41', reminder: 'Fugiat impedit', note: '' },
  { id: '42', reminder: 'Et, inventore', note: 'Aspernatur' },
  { id: '43', reminder: 'Officiis vitae consequatur', note: '' },
  { id: '44', reminder: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime ipsam quibusdam provident molestias quia soluta aliquid itaque cum, labore voluptatibus perspiciatis laboriosam nihil optio iusto necessitatibus aspernatur quaerat praesentium unde. Itaque eaque rem obcaecati tempora voluptatum voluptas nemo animi praesentium quia harum, ullam beatae tenetur eius error eveniet quidem quae laborum ratione culpa ducimus rerum et nisi, dolorum iure! Excepturi, nesciunt sapiente sint obcaecati perspiciatis harum perferendis laudantium quisquam ipsum. Et illo quasi aliquid magnam rem quaerat sit obcaecati perferendis magni placeat. Officia voluptas ipsa magni numquam iure laudantium eaque totam! Tempora reprehenderit dolore ratione laboriosam et error nesciunt.', note: 'Dicta similique delectus ' },
  { id: '45', reminder: 'Ea veritatis quas', note: '' },
  { id: '46', reminder: 'Nobis aspernatur, corrupti dolores', note: '' },
  { id: '47', reminder: 'Officia debitis aspernatur suscipit optio eius harum?', note: '' },
  { id: '48', reminder: 'Reiciendis dicta similique delectus dolorum eius harum?', note: 'Lorem ipsum' },
  { id: '49', reminder: 'Soluta impedit officia natus', note: '' },
  { id: '50', reminder: 'Voluptatum cupiditate', note: '' },
  { id: '51', reminder: 'Quibusdam itaque consequuntur magnam quo officiis autem corporis iusto!', note: '' },
  { id: '52', reminder: 'Unde sit molestiae magni aliquam', note: 'officia' },
  { id: '53', reminder: 'Fugiat impedit', note: '' },
  { id: '54', reminder: 'Et, inventore', note: 'Aspernatur' },
  { id: '55', reminder: 'Officiis vitae consequatur', note: '' },
  { id: '56', reminder: 'Recusandae voluptatibus', note: 'Dicta similique delectus' },
  { id: '57', reminder: 'Ea veritatis quas', note: '' },
  { id: '58', reminder: 'Nobis aspernatur, corrupti dolores', note: '' },
  { id: '59', reminder: 'Officia debitis aspernatur suscipit optio eius harum?', note: '' },
  { id: '60', reminder: 'Reiciendis dicta similique delectus dolorum eius harum?', note: 'Lorem ipsum' },
  { id: '61', reminder: 'Soluta impedit officia natus', note: '' },
  { id: '62', reminder: 'Voluptatum cupiditate', note: '' },
  { id: '63', reminder: 'Quibusdam itaque consequuntur magnam quo officiis autem corporis iusto!', note: '' },
  { id: '64', reminder: 'Unde sit molestiae magni aliquam', note: 'officia' },
  { id: '65', reminder: 'Fugiat impedit', note: '' },
  { id: '66', reminder: 'Et, inventore', note: 'Aspernatur' },
  { id: '67', reminder: 'Officiis vitae consequatur', note: '' },
  { id: '68', reminder: 'Recusandae voluptatibus', note: 'Dicta similique delectus' },
  { id: '69', reminder: 'Ea veritatis quas', note: '' },
  { id: '70', reminder: 'Nobis aspernatur, corrupti dolores', note: '' },
];

function App() {
  return (
    <div className="app">
      <aside className="app-aside">
        <header className="app-aside__aside-header aside-header">
          <input
            className="aside-header__search-input"
            type="text"
            placeholder="Search"
          />
          <button className="aside-header__cancel-button" type="button">
            <span className="visually-hidden">Clear search input</span>
          </button>
        </header>

        <nav className="app-aside__aside-site-nav aside-site-nav">
          <h2 className="visually-hidden">Filters</h2>
          <ul className="aside-site-nav__list">
            {filterTypes && (
              filterTypes.map((filter) => (
                <li className="aside-site-nav__item" key={filter.id}>
                  <a className="aside-site-nav__item-link" href={filter.id}>
                    <img
                      className="aside-site-nav__item-icon"
                      src={filter.icon}
                      alt=""
                    />
                    <h3 className="aside-site-nav__item-title">
                      <span className="visually-hidden">Filter name:</span>
                      {filter.title}
                    </h3>
                    <p className="aside-site-nav__item-counter">
                      <span className="visually-hidden">. Number of reminders in the list:</span>
                      1
                    </p>
                  </a>
                </li>
              ))
            )}
          </ul>
        </nav>

        <section className="app-aside__aside-user-nav aside-user-nav">
          <h2 className="aside-user-nav__title">My Lists</h2>
          <ul className="aside-user-nav__list">
            {items && (
              items.map((item) => (
                <li className="aside-user-nav__item" key={item.id}>
                  <a className="aside-user-nav__item-link" href={item.id}>
                    <img
                      className="aside-user-nav__item-icon"
                      src={item.icon}
                      alt=""
                    />
                    <h3 className="aside-user-nav__item-title">
                      <span className="visually-hidden">List name:</span>
                      {item.title}
                    </h3>
                    <p className="aside-user-nav__item-counter">
                      <span className="visually-hidden">. Number of reminders in the list:</span>
                      2
                    </p>
                  </a>
                </li>
              ))
            )}
          </ul>
        </section>

        <footer className="app-aside__aside-footer aside-footer">
          <button
            className="aside-footer__add-list-button"
            type="button"
          >
            Add List
          </button>
        </footer>
      </aside>

      <main className="app-main">
        <header className="app-main__main-header main-header">
          <button
            className="main-header__add-reminder-button"
            type="button"
          >
            <span className="visually-hidden">Add Reminder</span>
          </button>
          <div className="main-header__wrapper">
            <h2 className="main-header__title">optio ipsam amet expedita, iste in beatae placeat dolore magni.</h2>
            <p className="main-header__counter">
              3
              <span className="visually-hidden">active reminders</span>
            </p>
          </div>
        </header>

        <div className="app-main__main-container">
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

          <div className="app-main__main-reminders main-reminders">
            <ul className="main-reminders__list">

              <li className="main-reminders__item-edit">
                <div className="main-reminders__item-wrapper">
                  <label
                    className="main-reminders__item-label"
                  >
                    <input
                      className="main-reminders__item-checkbox visually-hidden"
                      type="checkbox"
                      name="reminder"
                    />
                    <span className="main-reminders__item-checkbox-icon" />
                    <span className="visually-hidden">Mark as completed</span>
                  </label>

                  <div className="main-reminders__item-content">
                    <input
                      className="main-reminders__item-reminder-input"
                      type="text"
                      name="reminder"
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="Reminder"
                    />

                    <input
                      className="main-reminders__item-note-input"
                      type="text"
                      name="note"
                      autoComplete="off"
                      spellCheck="false"
                      placeholder="Note"
                    />
                  </div>
                </div>
              </li>

              {posts && (
                posts.map((post) => (
                  <li className="main-reminders__item" key={post.id}>
                    <div className="main-reminders__item-wrapper">
                      <label
                        className="main-reminders__item-label"
                        htmlFor={post.id}
                      >
                        <input
                          className="main-reminders__item-checkbox visually-hidden"
                          type="checkbox"
                          name="reminder"
                          id={post.id}
                        />
                        <span className="main-reminders__item-checkbox-icon" />
                        <span className="visually-hidden">Mark as completed</span>
                      </label>

                      <div className="main-reminders__item-content">
                        <p className="main-reminders__item-reminder">
                          <span className="visually-hidden">Reminder:</span>
                          {post.reminder}
                        </p>

                        {post.note && (
                          <p className="main-reminders__item-note">
                            <span className="visually-hidden">Note:</span>
                            {post.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
