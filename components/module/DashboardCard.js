"use client";

import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import Card from "./Card";
import styles from "./DashboardCard.module.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DashboardCard = ({ data }) => {
 
  const router = useRouter();
  
  const editHandler = () => {
    router.push(`/dashboard/my-profile/${data._id}`);
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const dataDelete = await res.json();

    if (dataDelete.error) {
      toast.error(dataDelete.error);
    } else {
      
      toast.success(dataDelete.message);
    }
  };

  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
