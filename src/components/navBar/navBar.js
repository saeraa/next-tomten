import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavItem from "../navItem/navItem";
import LoginButton from "../loginButton/LoginButton";

const MENU_LIST = [
  { text: "Öppettider & Kontakt", href: "/" },
  { text: "Om oss", href: "/about" },
  { text: "Biljettinfo", href: "/" },
  { text: "Nyhetsbrev", href: "/" },
  { text: "Presentkort", href: "/" }
];

const Navbar = ({
  setShowLogInModal,
  setProfileShow,
  isLoggedIn,
  setIsLoggedIn
}) => {
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
          onClick={() => {
            setOpenNav(!openNav);
          }}
          className={`${styles.headerListToggle} ${
            openNav ? styles.open : null
          }`}
        ></button>
        <nav>
          <div onClick={() => setNavActive(!navActive)}>
            <ul
              className={`${styles.headerList} ${openNav ? styles.open : null}`}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        <LoginButton
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setShowLogInModal={setShowLogInModal}
          setProfileShow={setProfileShow}
        />
      </nav>
    </>
  );
};

        export default Navbar;
