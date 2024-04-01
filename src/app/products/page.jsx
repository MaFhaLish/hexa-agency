import styles from "./products.module.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "HexaAgancy - Products",
  description: "HexaAgancy Products Page",
};

async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function products() {
  const data = await getData();
  const products = data.products;

  return (
    <>
      <div className={styles.products_container}>
        {products.map(product => (
          <Link href={`/products/${product.id}`}>
            <div className={styles.product_container}>
              <Image
                alt={product.title}
                src={product.thumbnail}
                className={styles.product_img}
                fill={true}
              />
              <h2 className={styles.title_btn}>{product.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default products;
