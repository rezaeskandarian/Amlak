"use client";
import { FiLogIn  } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

import styles from "./Header.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();
  console.log(data);
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/buy-residentials"}> اگهی ها</Link>
          </li>
        </ul>
      </div>

      {data ? (
        <div className={styles.login}>
        <Link href={"/dashboard"}>
          <FaUserAlt />
          
        </Link>
      </div>
      ) : (
        <div className={styles.login}>
          <Link href={"/sign-in"}>
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
