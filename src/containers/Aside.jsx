import React from 'react';

import {
  Search,
  SiteNavItem,
  UserNavItem,
  AddListButton,
} from 'src/components';

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
];

const Aside = () => {
  return (
    <aside className="app-aside">
      <header className="app-aside__aside-header">
        <Search />
      </header>

      <nav className="app-aside__site-nav site-nav">
        <h2 className="visually-hidden">Filters</h2>
        <ul className="site-nav__list">
          {filterTypes && (
            filterTypes.map((filter) => (
              <SiteNavItem
                key={filter.id}
                id={filter.id}
                icon={filter.icon}
                title={filter.title}
              />
            ))
          )}
        </ul>
      </nav>

      <section className="app-aside__user-nav user-nav">
        <h2 className="user-nav__title">My Lists</h2>
        <ul className="user-nav__list">
          {items && (
            items.map((item) => (
              <UserNavItem
                key={item.id}
                id={item.id}
                icon={item.icon}
                title={item.title}
              />
            ))
          )}
        </ul>
      </section>

      <footer className="app-aside__aside-footer aside-footer">
        <AddListButton />
      </footer>
    </aside>
  );
};

export default Aside;
