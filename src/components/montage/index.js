import styles from "./montage.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencilSquare, BsThreeDotsVertical,BsPlusCircle } from "react-icons/bs";
import montage from "../../assets/images/montage.png";

const Montage = () => {
  return (
    <div className={styles.montage}>
      <div className={styles.montage_title}>
        <span>تدوین و صداگذاری</span>
        <BsPencilSquare size={18} />
        <RiDeleteBinLine style={{ color: "red" }} size={20} />
      </div>
      <div className={styles.montage_row}>
        <div className={styles.montage_image}>
          <img src={montage} alt="montage" />
          <span className={styles.dotIcon}>
            <BsThreeDotsVertical />
          </span>
          <span className={styles.montage_rowSpan}>
            تدوین تیزر تبلیغاتی نوشیدنی انرژی زا
          </span>
        </div>
        <div className={styles.montage_image}>
          <img src={montage} alt="montage" />
          <span className={styles.dotIcon}>
            <BsThreeDotsVertical />
          </span>
          <span className={styles.montage_rowSpan}>
            تدوین تیزر تبلیغاتی نوشیدنی انرژی زا
          </span>
        </div>
        <div className={styles.montage_image}>
          <img src={montage} alt="montage" />
          <span className={styles.dotIcon}>
            <BsThreeDotsVertical />
          </span>
          <span className={styles.montage_rowSpan}>
            تدوین تیزر تبلیغاتی نوشیدنی انرژی زا
          </span>
        </div>
        <div className={styles.montage_addBtn}>
          <span className={styles.montage_plusBtn}> <BsPlusCircle size={20}/>افزودن اثر </span>
          <span className={styles.montage_moreDisplay}>نمایش <br/>بیشتر...</span>
        </div>
      </div>
    </div>
  );
};

export default Montage;
