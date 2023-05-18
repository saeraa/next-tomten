import Link from "next/link";
import styles from "@/styles/header.module.scss";

const DropDownItem = ({ text, content }) => {
  return (
    <li className={styles.navListItem}>
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>
          {text}
          <i class="fa fa-caret-down"></i>
        </button>
        <div className={styles.dropdownContent} id={styles.dropdownRepertoar}>
          {content.map((item) => {
            return <Link href={item.href}>{item.text}</Link>;
          })}
        </div>
      </div>
    </li>
  );
};

export default DropDownItem;
