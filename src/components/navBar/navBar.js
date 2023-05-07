import React, { useState } from "react";
import Link from "next/link";
import NavItem from "../navItem/navItem";
import styles from "@/styles/header.module.scss";

const MENU_LIST = [
  { text: "Öppettider & Kontakt", href: "/" },
  { text: "Om oss", href: "/about" },
  { text: "Biljettinfo", href: "/" },
  { text: "Nyhetsbrev", href: "/" },
  { text: "Presentkort", href: "/" },
];

const Navbar = ({setShowLogInModal}) => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.header}>
      <Link href="/">
      <img className={styles.headerLogo} role="button" src="static/img/logo.svg" alt="logo" />
    </Link>
    <button class="header-list-toggle"></button>
    <ul class="header-list">
      <li class="header-list-item"><a href="open.html">Öppettider & Kontakt</a></li>
      <li class="header-list-item"><a href="about.html">Om Oss</a></li>
      <li class="header-list-item"><a href="ticketInfo.html">Biljettinfo</a></li>
      <li class="header-list-item"><a href="newsletter.html">Nyhetsbrev</a></li>
      <li class="header-list-item"><a href="giftcertificate.html">Presentkort</a></li>
      <li>
        <div class="search-bx">
          <div class="search">
            <input type="text" placeholder="Sök film..." id="search" data-search />
            <i class="material-symbols-outlined" id="search-icon">search</i>
            <div class="search-bx2" id="movies-filter"></div>
          </div>
        </div>
      </li>
    </ul>
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
          <li class="header-list-item">
        <a href="https://www.facebook.com" target="_blank"><img src="static/img/facebook.png" alt="Facebook" /></a>
        <a href="https://www.instagram.com" target="_blank"><img src="static/img/instagram.png" alt="Instagram" /></a>
        <a href="https://www.twitter.com" target="_blank"><img src="static/img/twitter.png" alt="Twitter" /></a>
      </li>
        </div>
        <button className={styles.logInButton} onClick={setShowLogInModal}>LOGGA IN</button>
      </nav>
    </header>
  );
};

export default Navbar;
