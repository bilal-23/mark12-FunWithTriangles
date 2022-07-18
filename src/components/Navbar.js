import styles from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/">Fun With Triangles</Link>
        </div>
        <div className={styles.nav_link_container}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
              >
                is Triangle?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
              >
                Quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hypotenuse"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
              >
                Hypotenuse
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/area-of-triangle"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : undefined
                }
              >
                Area of Triangles
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
