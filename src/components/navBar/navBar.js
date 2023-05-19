import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "../navItem/navItem";
import MenuDropDown from "../menuDropDown/MenuDropDown";
import styles from "@/styles/header.module.scss";
import logo from "../../../public/logoWithText.svg";
import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";
import twitter from "../../../public/twitter.png";

const MENU_LIST = [
  { text: "Öppettider & Kontakt", href: "/" },
  { text: "Om oss", href: "/about" },
  { text: "Biljettinfo", href: "/" },
  { text: "Nyhetsbrev", href: "/" },
  { text: "Presentkort", href: "/" }
];

const SUB_MENU_LIST = [
  {
    text: "Repertoar",
    content: [
      { text: "Hela bioprogrammet", href: "/" },
      { text: "Kommande premiärer", href: "/" },
      { text: "Erbjudande på matinéfilm", href: "/" }
    ]
  },
  {
    text: "Serverade salonger",
    content: [
      { text: "Salong Alcatraz", href: "/" },
      { text: "Salong Bar Deco", href: "/" },
      { text: "Salong Camera", href: "/" }
    ]
  },
  {
    text: "Specialvisningar",
    content: [
      { text: "Klassiker", href: "/" },
      { text: "Sing Along", href: "/" },
      { text: "Den Dåliga Filmklubben", href: "/" },
      { text: "Frukostbio", href: "/" },
      { text: "Cinemateket", href: "/" },
      { text: "Nyår på Tomtens Biograf", href: "/" },
      { text: "Hollywood om Hollywood", href: "/" }
    ]
  },
  {
    text: "Live på bio",
    content: [
      { text: "Hela programmet", href: "/" },
      { text: "Opera", href: "/" },
      { text: "Teater", href: "/" },
      { text: "Konst", href: "/" },
      { text: "Konsert", href: "/" }
    ]
  },
  {
    text: "Bar & Bistro",
    content: [
      { text: "Menyn", href: "/" },
      { text: "Premiärfredag", href: "/" },
      { text: "Filmquiz", href: "/" }
    ]
  }
];

const Navbar = ({ setShowLogInModal }) =>
{
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const [openNav, setOpenNav] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <>
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
          onClick={() =>
          {
            setOpenNav(!openNav);
          }}
          className={`${styles.headerListToggle} ${openNav ? styles.open : null
            }`}
        ></button>

        <nav>
          <div onClick={() => setNavActive(!navActive)}>
            <ul
              className={`${styles.headerList} ${openNav ? styles.open : null}`}
            >
              {MENU_LIST.map((menu, idx) => (
                <li
                  className={styles.headerListItem}
                  onClick={() =>
                  {
                    setActiveIdx(idx);
                    setNavActive(false);
                    setOpenNav(false);
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
                      className={showSearchBox ? styles.open : null}
                      type="text"
                      placeholder="Sök film..."
                      id={styles.search}
                      data-search
                    />
                    <i
                      onClick={() =>
                      {
                        setShowSearchBox(!showSearchBox);
                      }}
                      className="material-symbols-outlined"
                      id={styles.searchIcon}
                    >
                      search
                    </i>
                    <div
                      className={styles.searchBx2}
                      id={styles.moviesFilter}
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                <button className={`${styles.logInButton} ${styles.largeScreen}`} onClick={setShowLogInModal}>Logga in</button>
              </li>
            </ul>
          </div>
          <button className={`${styles.logInButton} ${styles.smallScreen}`} onClick={setShowLogInModal}>Logga in</button>
        </nav>
      </header>
      <nav className={styles.subNav}>
        <MenuDropDown itemList={SUB_MENU_LIST} />
      </nav>
    </>
  );
};

export default Navbar;
