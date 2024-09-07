import Link from "next/link";
import styles from "./Category.module.css";
import Image from "next/image";

const CategoryCard = ({ name, title }) => {
  return (
    <div className={styles.card}>
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={name}
          width={240}
          height={144}
          priority={true}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
