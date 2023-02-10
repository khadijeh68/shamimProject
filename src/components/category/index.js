import styles from "./category.module.css";
import displayTop from "../../assets/images/displayTop.png";
import Montage from "../montage";
import Design from "../design";
import Singing from "../singing";
import { HiOutlineFolderDownload } from "react-icons/hi";

const Category = () => {
  return (
    <>
      <div className={styles.category}>
        <div className={styles.category_rowOne}>
          <p>آثار من:</p>
          <p className={styles.displayTop}>
            <span>نوع نمایش:</span> <img src={displayTop} alt="displayTop" />
          </p>
        </div>
        <Montage />
        <Design />
        <Singing />
        <button className={styles.btn}>
          <HiOutlineFolderDownload size={20} />
          <span>افزودن دسته جدید</span>
        </button>
      </div>
    </>
  );
};

export default Category;
