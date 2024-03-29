import Link from "next/link";
import Style from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav>
        <h1 className={Style.logo}>Agency</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
