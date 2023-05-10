import React, { useState } from "react";
import NavItem from "../navItem/navItem";
import LoginButton from "../loginButton/LoginButton";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" }
];

const Navbar = ({
  setShowLogInModal,
  setProfileShow,
  isLoggedIn,
  setIsLoggedIn
}) => {
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
        <LoginButton
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setShowLogInModal={setShowLogInModal}
          setProfileShow={setProfileShow}
        />
      </nav>
    </header>
  );
};

export default Navbar;
