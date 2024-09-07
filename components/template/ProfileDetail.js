import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { BiCalendarCheck } from "react-icons/bi";
import styles from "./ProfileDetial.module.css";
import { e2p, sp } from "@/utils/replaceNumber";
import ShareButton from "../module/ShareButton";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/srtings";

const ProfileDetailPage = ({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) => {
  
 

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <h3 className={styles.title}>توضیحات</h3>
        <p>{description}</p>
        <h3 className={styles.title}>امکانات</h3>
        {amenities.length ? (
          <ul>
            {amenities.map((amenities, index) => (
              <li key={index}>{amenities}</li>
            ))}
          </ul>
        ) : (
          <p>هیچ موردی ذکر نشده است</p>
        )}
        <h3 className={styles.title}>قوانین</h3>
        {rules.length ? (
          <ul>
            {rules.map((rules, index) => (
              <li key={index}>{rules}</li>
            ))}
          </ul>
        ) : (
          <p>هیچ موردی ذکر نشده است</p>
        )}
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[category]} {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />{" "}
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailPage;
