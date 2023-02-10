import styles from "./design.module.css"
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPencilSquare, BsThreeDotsVertical,BsPlusCircle } from "react-icons/bs";
import design from "../../assets/images/design.png";

const Design = () => {
  return (
   <>
   <div className={styles.design}>
      <div className={styles.design_title}>
        <span>طراحی و گرافیک</span>
        <BsPencilSquare size={18} />
        <RiDeleteBinLine style={{ color: "red" }} size={20} />
      </div>
      <div className={styles.design_row}>
        <div className={styles.design_image}>
          <img src={design} alt="design" />
          <span className={styles.dotIcon}>
            <BsThreeDotsVertical />
          </span>
          <span className={styles.design_rowSpan}>
            طراحی سایت آموزشی آشپزی
          </span>
        </div>
        <div className={styles.design_image}>
          <img src={design} alt="design" />
          <span className={styles.dotIcon}>
            <BsThreeDotsVertical />
          </span>
          <span className={styles.design_rowSpan}>
            طراحی سایت آموزشی آشپزی
          </span>
        </div>
        <div className={styles.design_addBtn}>
          <span className={styles.design_plusBtn}> <BsPlusCircle size={20}/>افزودن اثر </span>
        </div>
      </div>
    </div>
   </>
  )
}

export default Design
