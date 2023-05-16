import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "../navItem/navItem";
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

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const [openNav, setOpenNav] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

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
                    className={showSearchBox ? styles.open: null}
                    type="text"
                    placeholder="Sök film..."
                    id={styles.search}
                    data-search
                  />
                  <i onClick={()=> {setShowSearchBox(!showSearchBox)}} className="material-symbols-outlined" id={styles.searchIcon}>
                    search
                  </i>
                  <div className={styles.searchBx2} id={styles.moviesFilter}></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button className={styles.logInButton} onClick={setShowLogInModal}>LOGGA IN</button>
      </nav>
      
    <nav>
    <ul className={styles.navList}>
      

      <li className={styles.navListItem}>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            Serverade salonger
            <i class="fa fa-caret-down"></i>
          </button>
          <div className={styles.dropdownContent} id={styles.dropdownSalonger}>
            <a href="placeholder.html">Salong Alcatraz</a>
            <a href="placeholder.html">Salong Bar Deco</a>
            <a href="placeholder.html">Salong Camera</a>
          </div>
        </div>
      </li>

      <li class="nav-list-item">
        <div class="dropdown">
          <button class="dropdown-button">
            Specialvisningar
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" id="dropdown-specialvisningar">
            <a href="placeholder.html">Klassiker</a>
            <a href="placeholder.html">Sing Along</a>
            <a href="placeholder.html">Den Dåliga Filmklubben</a>
            <a href="placeholder.html">Frukostbio</a>
            <a href="placeholder.html">Cinemateket</a>
            <a href="placeholder.html">Nyår på Tomtens Biograf</a>
            <a href="placeholder.html">Hollywood om Hollywood</a>
          </div>
        </div>
      </li>

      <li class="nav-list-item">
        <div class="dropdown">
          <button class="dropdown-button">
            Live på bio
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" id="dropdown-live">
            <a href="placeholder.html">Hela programmet</a>
            <a href="placeholder.html">Opera</a>
            <a href="placeholder.html">Teater</a>
            <a href="placeholder.html">Konst</a>
            <a href="placeholder.html">Konsert</a>
          </div>
        </div>
      </li>

      <li class="nav-list-item">
        <div class="dropdown">
          <button class="dropdown-button">
            Bar & Bistro
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content" id="dropdown-bar&bistro">
            <a href="placeholder.html">Meny</a>
            <a href="placeholder.html">Premiärfredag</a>
            <a href="placeholder.html">Filmquiz</a>
          </div>
        </div>
      </li>
    </ul>
  </nav>


    </header>
  );
};

export default Navbar;
