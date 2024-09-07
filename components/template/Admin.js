import AdminCard from "../module/AdminCard";
import styles from "./Admin.module.css";

const AdminPage = ({ profiles }) => {
  console.log({ profiles });
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی در انتظار تایید وجود ندارد </p>
      )}
    {profiles.map(i => <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />)}
    </div>
  );
};

export default AdminPage;
