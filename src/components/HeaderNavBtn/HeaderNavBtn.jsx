import { NavLink, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import css from "./HeaderNavBtn.module.css";

export const HeaderNavBtn = ({
  to = "/",
  display,
  inactive = false,
  onClick,
  crossed,
}) => {
  const location = useLocation();
  const isHereAlready = !inactive && location.state && location.pathname === to;
  return isHereAlready ? (
    <NavLink
      className={(nav) =>
        `${css.navLink} ${nav.isActive ? css.active : ""} ${
          crossed ? css.crossed : ""
        }`
      }
      to={to}
      // state={(prev) => prev}
      state={{ from: location.state.from }}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {display || to[0].toUpperCase() + "" + `${to}`.slice(1)}
    </NavLink>
  ) : (
    <NavLink
      className={(nav) =>
        `${css.navLink}  ${nav.isActive ? css.active : ""}  ${
          inactive ? css.inactive : ""
        } ${crossed ? css.crossed : ""}`
      }
      to={to}
      state={{ from: location.pathname }}
      onClick={onClick}
    >
      {display || to[0].toUpperCase() + "" + `${to}`.slice(1)}
    </NavLink>
  );
};
HeaderNavBtn.propTypes = {
  to: PropTypes.string,
  display: PropTypes.string,
};
