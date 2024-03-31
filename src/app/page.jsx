import Image from "next/image";
import styles from "./page.module.css";

import hero from "../../public/hero.svg";
export default function Home() {
  return (
    <>
      <main className={styles.hero_container}>
        <div className={styles.hero_text}>
          <h1>Your Best Web Agency Destination</h1>
          <p>
            Discover a world of endless help possibilities at our inline store ,
            browse choose , and order your favorite products from the comfort
            ofyour home
          </p>
          <div>
            <button className={styles.btn_our_products}>Our Products</button>
          </div>
        </div>
        <div className={styles.hero_img_container}>
          <Image
            className={styles.hero_img}
            src={hero}
            alt="Web Building hero img"
          />
        </div>
      </main>
    </>
  );
}
