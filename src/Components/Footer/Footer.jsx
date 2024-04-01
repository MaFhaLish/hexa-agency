import styles from "./Footer.module.css";
import Image from "next/image";
import x from "../../../public/icons/x.png";
function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>©2024 HEXAAGANCY All Rights reserved </div>
      </footer>
    </>
  );
}

export default Footer;
