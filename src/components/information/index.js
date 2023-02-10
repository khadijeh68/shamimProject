import styles from "./information.module.css";
import {
  BsPencilSquare,
  BsGlobe,
  BsWhatsapp,
  BsFacebook,
} from "react-icons/bs";
import profile from "../../assets/images/profile.png";

const Information = () => {
  return (
    <div className={styles.information}>
      <div className={styles.title}>
        <span>اطلاعات شناسایی</span>
        <hr className={styles.divider} />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div className={styles.profile}>
        <img src={profile} alt="profile" />
        <p>مهدی ساغری</p>
        <div className={styles.icon}>
          <BsGlobe size={22} />
          <BsWhatsapp size={22} />
          <BsFacebook size={22} />
        </div>
      </div>
      <div className={styles.title}>
        <span>تگ لاین ها</span>
        <hr className={styles.divider} />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div className={styles.tagLines}>
        <ul className={styles.tagLines}>
          <li>تجربه کاربری </li>
          <li>طراحی سایت</li>
          <li>گرافیک</li>
        </ul>
      </div>
      <div className={styles.title}>
        <span>درباره من</span>
        <hr className={styles.divider} />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <p className={styles.aboutMe}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
      <div className={styles.title}>
        <span>مهارت ها</span>
        <hr className={styles.divider} />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div className={styles.tagLines}>
        <ul className={styles.tagLines}>
          <li>تجربه کاربری </li>
          <li>طراحی سایت</li>
          <li>گرافیک</li>
        </ul>
      </div>
      <div className={styles.title}>
        <span>گواهینامه ها و مدارک تحصیلی</span>
        <hr className={styles.divider} />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div>
        <ul className={styles.certificate}>
          <li>کارشناسی کامپیوتر - دانشگاه تبریز</li>
          <li>مبانی طراحی - Udemy</li>
        </ul>
      </div>
      <div className={styles.title}>
        <span>سوابق شغلی</span>
        <hr className={styles.divider} />
        <span>
          <BsPencilSquare />
        </span>
      </div>
      <div>
        <ul className={styles.job}>
          <li>تجربه رابط کاربری - شرکت همراه</li>
          <li>طراح گرافیک - شرکت آینده سازان</li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
