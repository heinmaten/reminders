import React from 'react';
import PropTypes from 'prop-types';

const UserNavItem = (props) => {
  const { id, icon, title } = props;

  return (
    <li className="user-nav__item">
      <a className="user-nav__item-link" href={id}>
        <img
          className="user-nav__item-icon"
          src={icon}
          alt=""
        />
        <h3 className="user-nav__item-title">
          <span className="visually-hidden">List name:</span>
          {title}
        </h3>
        <p className="user-nav__item-counter">
          <span className="visually-hidden">. Number of reminders in the list:</span>
          2
        </p>
      </a>
    </li>
  );
};

UserNavItem.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default UserNavItem;
