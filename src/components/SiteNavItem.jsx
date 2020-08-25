import React from 'react';
import PropTypes from 'prop-types';

const SiteNavItem = (props) => {
  const { id, icon, title } = props;

  return (
    <li className="site-nav__item" key={id}>
      <a className="site-nav__item-link" href={id}>
        <img
          className="site-nav__item-icon"
          src={icon}
          alt=""
        />
        <h3 className="site-nav__item-title">
          <span className="visually-hidden">Filter name:</span>
          {title}
        </h3>
        <p className="site-nav__item-counter">
          <span className="visually-hidden">. Number of reminders in the list:</span>
          3
        </p>
      </a>
    </li>
  );
};

SiteNavItem.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SiteNavItem;
