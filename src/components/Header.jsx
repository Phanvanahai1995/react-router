import { NavLink } from "react-router-dom";

function Header() {
  function activeLink(isActive) {
    return isActive ? "text-red-500" : "";
  }

  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <NavLink to="/" className={({ isActive }) => activeLink(isActive)}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) => activeLink(isActive)}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) => activeLink(isActive)}
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
