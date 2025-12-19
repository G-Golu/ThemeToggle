import { NavLink } from "react-router-dom";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">ThemeToggle</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </li>
      </ul>

      <button className="toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
