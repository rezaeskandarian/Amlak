import { HiFilter } from "react-icons/hi";
import styles from "./SideBar.module.css";
import Link from "next/link";
import { categories } from "@/constants/srtings";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href={"/buy-residential"}>همه</Link>
      {Object.keys(categories).map((query) => (
        <Link
          key={query}
          href={{
            pathname: "/buy-residential",
            query: { category: query },
          }}
        >
          {categories[query]}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
