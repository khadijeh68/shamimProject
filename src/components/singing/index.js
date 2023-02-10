import styles from "./singing.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  BsPencilSquare,
  BsThreeDotsVertical,
  BsPlusCircle,
} from "react-icons/bs";
import books from "../../assets/images/books.png";

const Singing = () => {
  return (
    <div className={styles.singing}>
      <div className={styles.singing_title}>
        <span>گویندگی و خوانندگی</span>
        <BsPencilSquare size={18} />
        <RiDeleteBinLine style={{ color: "red" }} size={20} />
      </div>
      <div className={styles.singing_row}>
        <div className={styles.singing_image}>
          <img src={books} alt="books" />
          <span className={styles.dotIcon}>
            <BsThreeDotsVertical />
          </span>
          <span className={styles.singing_rowSpan}>
          خوانش کتاب صوتی "کتابخانه نیمه شب"
          </span>
        </div>
        <div className={styles.singing_image}>
          <img src={books} alt="books" />
          <span className={styles.dotIcon}>
            <BsThreeDotsVertical />
          </span>
          <span className={styles.singing_rowSpan}>
          خوانش کتاب صوتی "کتابخانه نیمه شب"
          </span>
        </div>
        <div className={styles.singing_image}>
          <img src={books} alt="books" />
          <span className={styles.dotIcon}>
            <BsThreeDotsVertical />
          </span>
          <span className={styles.singing_rowSpan}>
          خوانش کتاب صوتی "کتابخانه نیمه شب"
          </span>
        </div>
        <div className={styles.singing_addBtn}>
          <span className={styles.singing_plusBtn}>
            {" "}
            <BsPlusCircle size={20} />
            افزودن اثر{" "}
          </span>
          <span className={styles.singing_moreDisplay}>
            نمایش <br />
            بیشتر...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Singing;
