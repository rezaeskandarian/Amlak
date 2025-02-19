"use client";

import { signOut } from "next-auth/react";
import styles from "./LogoutButton.module.css";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  return (
    <button className={styles.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
};

export default LogoutButton;
