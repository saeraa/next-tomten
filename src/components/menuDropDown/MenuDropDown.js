import { useState } from "react";
import DropDownItem from "../dropDownItem/DropDownItem";
import styles from "@/styles/header.module.scss";

const MenuDropDown = ({ itemList }) => {
  const [showDropDown, setShowDropDown] = useState();
  return (
    <ul className={styles.navList}>
      {itemList.map((item, idx) => {
        return (
          <DropDownItem
            key={Math.random() * 13377331}
            idx={idx}
            showDropDown={showDropDown}
            setShowDropDown={setShowDropDown}
            text={item.text}
            content={item.content}
          />
        );
      })}
    </ul>
  );
};

export default MenuDropDown;
