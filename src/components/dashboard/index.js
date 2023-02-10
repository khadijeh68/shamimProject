import { NavLink } from "react-router-dom";
import styles from "./dashboard.module.css";
import { RiDashboardFill, RiBillLine } from "react-icons/ri";
import { BiUserCircle, BiChat, BiMailSend } from "react-icons/bi";
import { BsPersonPlus, BsEject } from "react-icons/bs";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { IoIosArrowDropright } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <ul>
        <li>
          <NavLink to="/">
            <RiDashboardFill size={22} />
            <span>داشبورد</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BiUserCircle size={22} />
            <span>پروفایل</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles.chatNumber}>
            <BiChat size={22} className={styles.chat}/>
            گفتگوها
            <span>{digitsEnToFa(3)}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BiMailSend size={22} />
            <span>ارسال دعوت نامه</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <RiBillLine size={22} />
            <span>صدور پیش فاکتور</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BsPersonPlus size={22} />
            <span>عضویت در کانتمو</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BsEject size={22} />
            <span>نمایش آثار</span>
          </NavLink>
        </li>
      </ul>
      <IoIosArrowDropright size={22} className={styles.svg}/>
    </div>
  );
};

export default Dashboard;
