import Link from "next/link";
import Style from "./Navbar.module.css";
import ThemeSwitcher from "@/Components/ThemeSwitcher/ThemeSwitcher";

function Navbar() {
  return (
    <>
      <nav className={Style.nav}>
        <h1 className={Style.logo}>HEXAAGANCY</h1>
        <ul className={Style.ul}>
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
