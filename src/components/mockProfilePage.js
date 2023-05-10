import { getCookie } from "cookies-next";
import JWT from "jsonwebtoken";

const mockProfilePage = (props) => {
  let username;
  if (props.profileIsShown) {
    /*   const sessionData = Buffer.from(
      getCookie("session").split(".")[1],
      "base64"
    ).toString();
    let usernameString = sessionData.split(",")[0].split(":")[1];
    username = usernameString.substring(1, usernameString.length - 1);*/
    try {
      const decoded = JWT.verify(getCookie("session"), "1234abcd");
      username = decoded.userName;
    } catch {
      console.log("no valid token, session expired");
    }
  }
  const handleClick = () => {
    props.setProfileShow(false);
  };

  return props.profileIsShown ? (
    !!username ? (
      <div>
        <h1>Welcome, {username}</h1>
        <button onClick={handleClick}>Close profile page</button>
      </div>
    ) : (
      <div>
        <h1>Please log in, before coming here</h1>
        <button onClick={handleClick}>Close profile page</button>
      </div>
    )
  ) : (
    ""
  );
};

export default mockProfilePage;
