import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const getLinkStyle = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navActive);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <NavLink to="/" className={getLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getLinkStyle}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
