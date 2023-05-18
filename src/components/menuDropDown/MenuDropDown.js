import DropDownItem from "../dropDownItem/DropDownItem";
import styles from "@/styles/header.module.scss";

const MenuDropDown = ({ itemList }) => {
  console.log(itemList);
  return (
    <ul className={styles.navList}>
      {itemList.map((item) => {
        return <DropDownItem text={item.text} content={item.content} />;
      })}
    </ul>
  );
};

export default MenuDropDown;
