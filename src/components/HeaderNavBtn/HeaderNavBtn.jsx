import { NavLink, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import css from "./HeaderNavBtn.module.css";

export const HeaderNavBtn = ({
  to = "/",
  display,
  onClick,
  inactive = false,
  crossed = false,
  completed = false,
  warning = false,
  recommended = false,
  disabled = false,
  styles = false,
}) => {
  const location = useLocation();
  const isHereAlready = !inactive && location.state && location.pathname === to;
  return isHereAlready ? (
    <NavLink
      className={(nav) =>
        `${css.navLink} ${nav.isActive ? css.active : ""} ${
          crossed ? css.crossed : ""
        } ${disabled ? css.disabled : ""} ${
          warning ? css.warning : completed ? css.completed : ""
        } `
      }
      to={to}
      // state={(prev) => prev}
      state={{ from: location.state.from }}
      // onClick={(e) => {
      //   e.preventDefault();
      //   if (!disabled) onClick(e);
      // }}
      style={styles ? styles : {}}
    >
      {"here" + display || to[0].toUpperCase() + "" + `${to}`.slice(1)}
    </NavLink>
  ) : (
    <NavLink
      className={(nav) =>
        `${css.navLink}  ${nav.isActive ? css.active : ""}  ${
          inactive ? css.inactive : ""
        } ${crossed ? css.crossed : ""} ${disabled ? css.disabled : ""} ${
          warning ? css.warning : completed ? css.completed : recommended? css.recommended : ""
        } `
      }
      to={to}
      state={{ from: location.pathname }}
      onClick={(e) => {
        if (!disabled) onClick(e);
      }}
      style={styles ? styles : {}}
    >
      {display || to[0].toUpperCase() + "" + `${to}`.slice(1)}
    </NavLink>
  );
};
// HeaderNavBtn.propTypes = {
//   to: PropTypes.string,
//   display: PropTypes.string,
// };
