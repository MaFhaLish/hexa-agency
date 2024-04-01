import styles from "./product.module.css";
import Image from "next/image";
import Link from "next/link";
async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function product({ params }) {
  const product = await getData(params.id);

  return (
    <div className={styles.product_container}>
      <Link href="/products">
        <h2 className={styles.title}>{product.title}</h2>
      </Link>
      <p className={styles.desc}>{product.description}</p>
      <div className={styles.thumbnail_container}>
        <Image
          className={styles.thumbnail}
          src={product.thumbnail}
          alt={product.title}
          fill={true}
        />
        <h3 className={styles.title_btn}>{product.category}</h3>
      </div>
      <div className={styles.images_container}>
        {product.images.map(img => (
          <Image
            key={product.id}
            src={img}
            alt={product.title}
            width={100}
            height={100}
            className={styles.img}
          />
        ))}
      </div>
      <p className={styles.detais}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non reiciendis
        aperiam qui placeat blanditiis explicabo vel et. Sed incidunt esse
        reprehenderit eligendi fugiat distinctio itaque doloremque saepe, in
        deserunt placeat. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Non reiciendis aperiam qui placeat blanditiis explicabo vel et.
        Sed incidunt esse reprehenderit eligendi fugiat distinctio itaque
        doloremque saepe, in deserunt placeat. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Non reiciendis aperiam qui placeat
        blanditiis explicabo vel et. Sed incidunt esse reprehenderit eligendi
        fugiat distinctio itaque doloremque saepe, in deserunt placeat. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Non reiciendis
        aperiam qui placeat blanditiis explicabo vel et. Sed incidunt esse
        reprehenderit eligendi fugiat distinctio itaque doloremque saepe, in
        deserunt placeat. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Non reiciendis aperiam qui placeat blanditiis explicabo vel et.
        Sed incidunt esse reprehenderit eligendi fugiat distinctio itaque
        doloremque saepe, in deserunt placeat. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Non reiciendis aperiam qui placeat
        blanditiis explicabo vel et. Sed incidunt esse reprehenderit eligendi
        fugiat distinctio itaque doloremque saepe, in deserunt placeat. Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Non reiciendis
        aperiam qui placeat blanditiis explicabo vel et. Sed incidunt esse
        reprehenderit eligendi fugiat distinctio itaque doloremque saepe, in
        deserunt placeat. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Non reiciendis aperiam qui placeat blanditiis explicabo vel et.
        Sed incidunt esse reprehenderit eligendi fugiat distinctio itaque
        doloremque saepe, in deserunt placeat.
      </p>
    </div>
  );
}

export default product;
