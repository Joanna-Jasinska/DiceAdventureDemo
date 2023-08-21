import { NavLink, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import css from './HeaderNavBtn.module.css';

export const HeaderNavBtn = ({ to = '/', display, inactive = false }) => {
  const location = useLocation();
  const isHereAlready = !inactive && location.state && location.pathname === to;
  return isHereAlready ? (
    <NavLink
      className={nav => `${css.navLink} ${nav.isActive ? css.active : ''}`}
      to={to}
      state={prev => prev}
    >
      {display || to[0].toUpperCase() + '' + `${to}`.slice(1)}
    </NavLink>
  ) : (
    <NavLink
      className={nav =>
        `${css.navLink}  ${nav.isActive ? css.active : ''}  ${
          inactive ? css.inactive : ''
        }`
      }
      to={to}
      state={{ from: location.pathname }}
    >
      {display || to[0].toUpperCase() + '' + `${to}`.slice(1)}
    </NavLink>
  );
};
HeaderNavBtn.propTypes = {
  to: PropTypes.string,
  display: PropTypes.string,
};
