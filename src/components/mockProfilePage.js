import { useContext } from "react";
import { LoggedInContext } from "@/pages/_app";
//FAKE, NOT TO BE USED LATER
const mockProfilePage = (props) => {
  const { username } = useContext(LoggedInContext);

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
