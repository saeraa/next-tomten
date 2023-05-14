import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "../navItem/navItem";
import LoginButton from "../loginButton/LoginButton";
import MenuDropDown from "../menuDropDown/MenuDropDown";
import styles from "@/styles/header.module.scss";
import logo from "../../../public/logoWithText.svg";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";
import twitter from "../../../public/twitter.png";
import LoginButton from "../loginButton/LoginButton";

const MENU_LIST = [
  { text: "Öppettider & Kontakt", href: "/" },
  { text: "Om oss", href: "/about" },
  { text: "Biljettinfo", href: "/" },
  { text: "Nyhetsbrev", href: "/" },
  { text: "Presentkort", href: "/" }
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const [openNav, setOpenNav] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.headerLogo}
          role="button"
          src={logo}
          alt="logo"
        />
      </Link>
      <button
        onClick={() => {
          setOpenNav(!openNav);
        }}
        className={`${styles.headerListToggle} ${openNav ? styles.open : null}`}
      ></button>
      <nav>
        <div onClick={() => setNavActive(!navActive)}>
          <ul
            className={`${styles.headerList} ${openNav ? styles.open : null}`}
          >
            {MENU_LIST.map((menu, idx) => (
              <li
                className={styles.headerListItem}
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </li>
            ))}
            <li className={styles.headerListItem}>
              <a href="https://www.facebook.com" target="_blank">
                <Image src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <Image src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <Image src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <div className={styles.searchBx}>
                <div className={styles.search}>
                  <input
                    type="text"
                    placeholder="Sök film..."
                    id="search"
                    data-search
                  />
                  <i className="material-symbols-outlined" id="search-icon">
                    search
                  </i>
                  <div className={styles.searchBx2} id="movies-filter"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button className={styles.logInButton} onClick={setShowLogInModal}>LOGGA IN</button>
      </nav>
    </header>
  );
};

        export default Navbar;
