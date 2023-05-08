import React, { useState } from "react";
import NavItem from "../navItem/navItem";
import styles from "@/styles/navBar.module.scss";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" }
];

const Navbar = ({setShowLogInModal}) => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav>
        <div onClick={() => setNavActive(!navActive)}></div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        <button className={styles.logInButton} onClick={setShowLogInModal}>LOGGA IN</button>
      </nav>
    </header>
  );
};

export default Navbar;
