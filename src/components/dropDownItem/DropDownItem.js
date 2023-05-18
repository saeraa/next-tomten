import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/header.module.scss";

const DropDownItem = ({
  idx,
  showDropDown,
  setShowDropDown,
  text,
  content
}) => {

  return (
    <li
      onMouseEnter={() => {
        setShowDropDown(idx);
      }}
      onMouseLeave={() => {
        setShowDropDown(null);
      }}
      onClick={() => {
        setShowDropDown(idx);
      }}
      className={styles.navListItem}
    >
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton}>
          {text}
          <i class="fa fa-caret-down"></i>
        </button>
        <div className={`${styles.dropdownContent} ${showDropDown === idx ? styles.show : null}`}>
          {content.map((item) => {
            return <Link href={item.href}>{item.text}</Link>;
          })}
        </div>
      </div>
    </li>
  );
};

export default DropDownItem;
