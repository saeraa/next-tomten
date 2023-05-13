import styles from "@/styles/navBar.module.scss";
import logoutUser from "@/utils/logoutUser";
import { getCookie } from "cookies-next";
import JWT from "jsonwebtoken";

const LoginButton = (props) => {
  const handleLogout = () => {
    if (logoutUser()) {
      props.setIsLoggedIn(false);
      props.setProfileShow(false);
      props.setPopupTitle("Tack för denna gång!");
      props.setPopupMessage("Hoppas att vi ses snart igen!");
      props.setDisplayPopup(true);
    }
  };

  //Finns säkert bättre sätt att göra detta på, men mycket av det jag testade fungerade ej. Detta fungerar i alla fall :D
  const toggleMenu = (e) => {
    let element =
      e.target instanceof HTMLButtonElement
        ? e.target.nextSibling
        : e.target.parentNode.nextSibling; //content to show or hide
    element.style.display = element.style.display == "block" ? "none" : "block";
  };

  const closeMenu = (e) => {
    e.target.parentNode.style.display = "none";
    props.setProfileShow(true);
  };
  let username = "";
  if (props.isLoggedIn) {
    try {
      /* This needs to be changed, but for simplicty and since its a school project i used verify with exposing the key.
     In production,
     Buffer.from(getCookie("session").split(".")[1],"base64").toString(); 
     OR atob(getCookie("session")); 
     should be used instead */
      const decoded = JWT.verify(getCookie("session"), "1234abcd");
      username = decoded.userName;
    } catch (e) {
      //comes here when the session is expired.
    }
  }

  return props.isLoggedIn ? (
    <div className={styles.logOut}>
      <button
        data-testid="loggedInButton"
        className={styles.logOutButton}
        onClick={toggleMenu}
      >
        <i className="fa fa-user-circle-o" id="user-icon"></i>
        Inloggad som:{" "}
        <span data-testid="username" className={styles.username}>
          {username}
        </span>{" "}
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={styles.logoutContent}>
        <a data-testid="menuItem" onClick={closeMenu}>
          Profil
        </a>
        <a onClick={handleLogout}>Logga ut</a>
      </div>
    </div>
  ) : (
    <button
      data-testid="logInButton"
      className={styles.logInButton}
      onClick={props.setShowLogInModal}
    >
      LOGGA IN / REGISTRERA DIG
    </button>
  );
};

export default LoginButton;
