import "./NavBar.css";
import { NETFLIX_LOGO, userIcon } from "../../Constants/Other_Constants";
function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={`${NETFLIX_LOGO}`} alt="Logo" />
      <img className="avatar" src={`${userIcon}`} alt="user_profile" />
    </div>
  );
}

export default NavBar;
