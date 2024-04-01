import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeSwitcher from "@/Components/ThemeSwitcher/ThemeSwitcher";

function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>
          <Link href="/">HEXAAGANCY</Link>
        </h1>
        <ul className={styles.ul}>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
