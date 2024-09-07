import {CgProfile} from "react-icons/cg"
import styles from "./DashboardSideBar.module.css";
import Link from "next/link";
import LogoutButton from "../module/LogoutButton";

const DashboardSideBar = async ({ children , role , email }) => {
    
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
         <CgProfile />
         {role === "ADMIN" ? "ادمین"  : null}
         <p>{email}</p>
         <span></span>
         <Link href={"/dashboard"}>حساب کاربری</Link>
         <Link href={"/dashboard/my-profile"}> آگهی های من</Link>
         <Link href={"/dashboard/add"}> ثبت آگهی</Link>
        {role === "ADMIN" && <Link href={"/admin"}>در انتظار تایید</Link>};
         <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSideBar;
