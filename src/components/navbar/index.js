import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import mode from "../../assets/images/mode.png";
import styles from "./navbar.module.css";
import { BsBell, BsArrowRight } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const Navbar = () => {
  return (
    <>
      <header className={styles.navbar}>
        <nav>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/">
                <img src={mode} alt="mode-logo" className={styles.img} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.item}>
                <BsArrowRight />
              </NavLink>
            </li>

            <li>
              <NavLink to="/" className={styles.item}>
                <AiOutlineSetting />
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className={styles.item}>
                <BsBell />
                <span>{digitsEnToFa(2)}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink to="/" className={styles.logo}>
          <img src={logo} alt="shamim-logo" />
        </NavLink>
      </header>
    </>
  );
};

export default Navbar;
